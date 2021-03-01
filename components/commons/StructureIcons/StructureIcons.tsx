import React from 'react';

import K01 from 'components/molecules/StructureIcons/K01';
import K02 from 'components/molecules/StructureIcons/K02';

import styles from 'components/commons/StructureIcons/Icons.module.scss';

type Props = {
    iconName: string;
    size: 'small' | 'medium' | 'big';
};

const setIconSize = (size) => {
    return {
        small: '30px',
        medium: '45px',
        big: '60px',
    }[size];
};

const Icon = (props: Props) => {
    const { iconName, size = 'medium' } = props;

    if (!iconName) return null;

    return (
        <svg
            style={{ marginLeft: '-7px' }}
            className={styles.icon}
            width={setIconSize(size)}
            height={setIconSize(size)}
            viewBox={`0 0 62 40`}
        >
            {
                {
                    ['K01']: <K01 letter="Ba" />,
                    ['K02']: <K02 letter="Ee" />,
                }[iconName]
            }
        </svg>
    );
};

export default Icon;
