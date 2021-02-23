import React from 'react';
import { Overlay } from '../../_atoms/Overlay';
import styles from './index.module.scss';

export type Props = {
  id: string;
  modalRef: React.MutableRefObject<HTMLElement | null>;
  handleKeydown: (_e: React.KeyboardEvent<HTMLElement>) => void;
};
export const ModalWrapper: React.FC<Props> = ({
  id,
  modalRef,
  handleKeydown,
  children,
}) => (
  <Overlay>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
    <section
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={id}
      className={styles.root}
      onKeyDown={(e) => handleKeydown(e)}>
      {children}
    </section>
  </Overlay>
);
