import React from 'react';
import styles from './Icons.module.scss';

type Props = {
    letter: string;
};

const K01 = ({ letter }: Props) => {
    return (
        <>
            <path vectorEffect="non-scaling-stroke" d={'M1 1 L38 1 L50 20 L38 38 L1 38 L12 20 Z'} />
            <text className={styles.text} x="22" y="25">
                {letter}
            </text>
        </>
    );
};

export default K01;
