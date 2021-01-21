import React from 'react';
import styles from './StructureCreator.module.scss';

// import InstructionMessage from './InstructionMessage';
import StructureDescriber from './StructureDescriber';
import StructureModel from 'components/organisms/StructureModel/StructureModel';
import HelpModal from './HelpModal';

const StructureCreator = () => {
    return (
        <section className={styles.structure_creator}>
            {/*<InstructionMessage />*/}

            <div className={styles.structure_creator__model}>
                <StructureModel />
            </div>

            <StructureDescriber />
            <HelpModal />
        </section>
    );
};

export default StructureCreator;
