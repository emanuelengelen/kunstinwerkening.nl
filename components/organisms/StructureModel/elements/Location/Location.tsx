import React, { PropsWithChildren, useState } from 'react';
import styles from './Location.module.scss';

import { TypeContainerRect } from '../../types';
import Part from 'components/organisms/StructureModel/Part';
import Icon from 'components/molecules/StructureIcons/StructureIcons';

const Location = (props: PropsWithChildren<TypeContainerRect>) => {
    const { children, containerRect } = props;
    const [hoverState, setHoverState] = useState(false);

    const stroke = 1;

    const ground = `
      M110,${containerRect.height - 110}
      L0,${containerRect.height}
      L${stroke},${containerRect.height - stroke}
      L${containerRect.width - 110},${containerRect.height - stroke}
      L${containerRect.width},${containerRect.height - 110}Z   
    `;

    const wallsInner = `
      M0,${containerRect.height}
      L0,${110}
      L${110},0
      L${containerRect.width},0
      L${containerRect.width},${containerRect.height - 110}
    `;

    const wallsBack = `
      M110,0
      L110,${containerRect.height - 110}
    `;

    const wallsOuter = `
      M${containerRect.width - 110},${containerRect.height}
      l0,-${containerRect.height - 110}
      m110,-110
      l-${110},110
      l-${containerRect.width - 110}, 0
    `;

    return (
        <div
            className={styles.location_container}
            style={{
                width: `${containerRect.width}px`,
                height: `${containerRect.height}px`,
            }}
        >
            <svg
                className={styles.location}
                width="100%"
                height="100%"
                viewBox={`0 0 ${containerRect.width} ${containerRect.height}`}
            >
                <Part
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    path={ground}
                    className={styles.location__ground_back}
                    activeClassName={styles.location__ground_back_active}
                />

                <Part
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    path={wallsBack}
                    className={styles.location__walls_back}
                    activeClassName={styles.location__ground_back_active}
                />

                <Part
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    path={wallsInner}
                    className={styles.location__walls_inner}
                    activeClassName={styles.location__ground_back_active}
                />

                {children}

                <Part
                    hoverState={hoverState}
                    setHoverState={setHoverState}
                    path={`
                          M${containerRect.width - 110},${containerRect.height}
                          l0,-${containerRect.height - 110}
                          m110,-110
                          l-${110},110
                          l-${containerRect.width - 110}, 0
                    `}
                    className={styles.location__walls_outer}
                    activeClassName={styles.location__ground_back_active}
                />
            </svg>

            <div>
                <Icon iconName="K01" />
                <Icon iconName="K02" />
            </div>
        </div>
    );
};

export default Location;
