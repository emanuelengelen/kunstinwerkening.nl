import React from 'react';

import styles from 'components/scopes/StructureCreator/partials/InstructionMessage/InstructionMessage.module.scss';

const InstructionMessage = () => {
    // const message = useAnimatedMessage(
    //   "hi there, start by describing a artworkk"
    // );
    const text = 'hi there, start by describing a artwork';
    const message: string[] = [...text];

    return (
        <div className={styles.instruction_message}>
            <div className={styles.slideRight}>
                <h2>
                    {message.map((letter) => {
                        return <span key={letter}>{letter}</span>;
                    })}
                </h2>
            </div>
        </div>
    );
};

export default InstructionMessage;
