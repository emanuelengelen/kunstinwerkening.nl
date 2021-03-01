import React from 'react';

import StructureDescriber from 'components/scopes/StructureCreator/partials/StructureDescriber/StructureDescriber';
import StructureModel from 'components/blocks/StructureModel/StructureModel';
import HelpPanel from 'components/scopes/StructureCreator/partials/HelpPanel/HelpPanel';
import HelpButton from 'components/scopes/StructureCreator/partials/HelpButton/HelpButton';
import SidePanel from 'components/blocks/SidePanel/SidePanel';
import styles from 'components/scopes/StructureCreator/StructureCreator.module.scss';

const StructureCreator = () => {
    return (
        <section className={styles.structure_creator}>
            <div className={styles.structure_creator__creator}>
                <div className={styles.structure_creator__creator__model}>
                    <StructureModel />
                </div>

                <div className={styles.structure_creator__creator__describer}>
                    <StructureDescriber />
                </div>

                <HelpButton />
            </div>

            <div className={styles.structure_creator__side_panel}>
                <SidePanel>
                    <HelpPanel />
                </SidePanel>
            </div>
        </section>
    );
};

export default StructureCreator;
