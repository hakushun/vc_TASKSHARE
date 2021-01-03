import React from 'react';
import { Overlay } from '../../_atoms/Overlay';
import styles from './index.module.scss';

export const ModalWrapper: React.FC = ({ children }) => (
  <Overlay>
    <section className={styles.root}>{children}</section>
  </Overlay>
);
