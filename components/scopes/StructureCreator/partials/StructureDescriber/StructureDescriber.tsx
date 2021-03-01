import React, { useEffect, useState, useRef } from 'react';
import sanitizeHtml from 'sanitize-html';

import styles from 'components/scopes/StructureCreator/partials/StructureDescriber/StructureDescriber.module.scss';
import useStructuresocket from 'components/scopes/StructureCreator/hooks/useStructuresocket';

function setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    if (document.createRange) {
        //Firefox, Chrome, Opera, Safari, IE 9+
        range = document.createRange(); //Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
        range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection(); //get the selection object (allows you to change selection)
        selection.removeAllRanges(); //remove any selections already made
        selection.addRange(range); //make the range you have just created the visible selection
    } else if (document.selection) {
        //IE 8 and lower
        range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
        range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
        range.select(); //Select the range (make it the visible selection
    }
}

const StructureDescriber = () => {
    const [descText, setDescText] = useState('');
    const [car, setCar] = useState(0);

    const ref = useRef(null);

    const artDesc = useStructuresocket(descText);

    useEffect(() => {
        let test = artDesc;
        if (artDesc.includes('artwork')) {
            console.log('found');
            test = artDesc.replace(
                'artwork',
                `<span style="background: #8d4f4f; border-radius: 4px; padding: 0 2px;">artwork</span>`,
            );
        }
        ref.current.innerHTML = sanitizeHtml(test, {
            allowedTags: ['span'],
            allowedAttributes: {
                span: ['style'],
            },
            allowedStyles: {
                span: {
                    background: [/^#(0x)?[0-9a-f]+$/i],
                    'border-radius': [/^4px$/],
                    padding: [/^0 2px/],
                },
            },
        });

        if (ref.current.children.length) {
            console.log(ref.current.children[0]);
            ref.current.children[0].addEventListener('mouseenter', () => console.log('teeestt'));
        }
    }, [artDesc]);

    useEffect(() => {
        const myDiv = document.getElementById('editable');
        //
        // const selection = document.getSelection();
        //
        // myDiv.addEventListener('keydown', (event) => {
        //     console.log(selection);
        //     setCar(selection.focusOffset);
        // });
        //
        // // const range = document.createRange();
        // // range.setStart(myDiv, selection.focusOffset);
        // // range.setEnd(myDiv, selection.focusOffset);

        setEndOfContenteditable(myDiv);
    }, [artDesc]);

    useEffect(() => {
        const myDiv = document.getElementById('editable');

        const range = document.createRange();
        range.setStart(myDiv, car);
        range.setEnd(myDiv, car);
    }, [car]);

    return (
        <div className={styles.structure_describer}>
            <div
                id="editable"
                ref={ref}
                contentEditable={true}
                onInput={(e) => setDescText(e.currentTarget.textContent)}
                className={styles.structure_describer__input}
            />
        </div>
    );
};

export default StructureDescriber;
