import React from 'react';
import styles from 'components/scopes/StructureCreator/partials/HelpButton/HelpButton.module.scss';

const HelpButton = () => {
    return (
        <div className={styles.help_button}>
            <button className={styles.help_button__button}>help you</button>
            <button className={styles.help_button__button}>export me</button>
        </div>
    );
};

export default HelpButton;
