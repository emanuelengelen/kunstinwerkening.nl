import React from 'react';
import styles from './SidePanelContainer.module.scss';

const SidePanelContainer = (props) => {
    const { children } = props;

    return <aside className={styles.side_panel}>{children}</aside>;
};

export default SidePanelContainer;
