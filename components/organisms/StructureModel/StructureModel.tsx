import React, { useState, useRef, useEffect } from 'react';

import styles from './StructureModel.module.scss';

import Location from './elements/Location/Location';

import LeftInfo from 'components/organisms/StructureModel/elements/Maker/Maker';
import RightInfo from 'components/organisms/StructureModel/elements/Reciver/Reciver';
import Artwork from 'components/organisms/StructureModel/elements/Artwork/Artwork';
import InnerCarrier from './elements/InnerCarrier/InnerCarrier';
import Icon from 'components/molecules/StructureIcons/StructureIcons';
import useWindowInnerWidth from 'hooks/useWindowInnerWidth';

const StructureModel = () => {
    const [scale, setScale] = useState(1);
    const containerRef = useRef(null);
    const windowInnerWidth = useWindowInnerWidth();

    const [containerRect, setContainerRect] = useState({
        width: 500,
        height: 400,
    });

    useEffect(() => {
        setContainerRect({ width: 500, height: 400 });
    }, [windowInnerWidth]);

    useEffect(() => {
        if (containerRef.current.clientWidth / 1240 < 1) {
            setScale(containerRef.current.clientWidth / 1240);
        }
    }, [windowInnerWidth]);

    return (
        <div className={styles.wrapper} ref={containerRef}>
            <div className={styles.structure_grid} style={{ transform: `scale(${scale})` }}>
                <div className={styles.structure_grid__item}>
                    <LeftInfo />
                </div>

                <Location containerRect={containerRect}>
                    <InnerCarrier containerRect={containerRect}>
                        <Artwork containerRect={containerRect} />
                    </InnerCarrier>
                </Location>

                <div className={styles.structure_grid__item}>
                    <RightInfo />
                </div>
            </div>
        </div>
    );
};

export default StructureModel;
