import React from 'react';
import { SecondaryButton } from '../../_atoms/SecondaryButton';
import { ModalWrapper } from '../../_molecules/ModalWrapper';
import styles from './index.module.scss';

type Props = {
  message: { title: string; description: string };
  closeDialog: () => void;
};
export const Dialog: React.FC<Props> = ({ message, closeDialog }) => (
  <ModalWrapper id="dialog" handleClose={closeDialog}>
    <div id="dialog">
      <div className={styles.title}>{message.title}</div>
      <div className={styles.description}>
        <div>{message.description}</div>
      </div>
      <div className={styles.buttonWrapper}>
        <SecondaryButton
          label="Close"
          type="submit"
          disabled={false}
          handleClick={closeDialog}
        />
      </div>
    </div>
  </ModalWrapper>
);
