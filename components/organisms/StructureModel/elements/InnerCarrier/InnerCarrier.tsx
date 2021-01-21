import React, { useState } from 'react';

import { TypeContainerRect } from '../../types';

import styles from './InnerCarrier.module.scss';
import Part from '../../Part';

const InnerCarrier = (props: TypeContainerRect) => {
    const { containerRect } = props;
    const [hoverState, setHoverState] = useState(false);

    const floor = `
      M${70},${containerRect.height - 30}
      L${containerRect.width - 120},${containerRect.height - 30}
      L${containerRect.width - 60},${containerRect.height - 90}
      L${130},${containerRect.height - 90}Z
    `;

    const wall = `
      M130,${containerRect.height - 88}
      L130,40
      L${containerRect.width - 60},40
      L${containerRect.width - 60},${containerRect.height - 88}
    `;

    return (
        <>
            <Part
                hoverState={hoverState}
                setHoverState={setHoverState}
                path={wall}
                className={styles.inner_carrier__wall}
                activeClassName={styles.inner_carrier__wall_active}
            />

            <Part
                hoverState={hoverState}
                setHoverState={setHoverState}
                path={floor}
                className={styles.inner_carrier__floor}
                activeClassName={styles.inner_carrier__wall_active}
            />
        </>
    );
};

export default InnerCarrier;
