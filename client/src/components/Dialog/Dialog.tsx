import React from 'react';
import { ModalWrapper } from '../_molecules/ModalWrapper';
import styles from './index.module.scss';

type Props = {
  message: { title: string; description: string };
  closeDialog: () => void;
};
export const Dialog: React.FC<Props> = ({ message, closeDialog }) => (
  <ModalWrapper>
    <div className={styles.title}>{message.title}</div>
    <div className={styles.description}>
      <div>{message.description}</div>
    </div>
    <div className={styles.buttonWrapper}>
      <button
        className={styles.button}
        type="button"
        onClick={() => closeDialog()}>
        閉じる
      </button>
    </div>
  </ModalWrapper>
);
