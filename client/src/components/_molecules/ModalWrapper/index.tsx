import React, { useEffect } from 'react';
import { Overlay } from '../../_atoms/Overlay';
import styles from './index.module.scss';

type Props = {
  id: string;
  handleClose: () => void;
};
export const ModalWrapper: React.FC<Props> = ({
  id,
  handleClose,
  children,
}) => {
  const handleKeydown = (e: any) => {
    if (e.key === 'Escape') handleClose();
  };

  useEffect(() => {
    document.getElementById('app')?.setAttribute('aria-hidden', 'true');
    document.body.addEventListener('keydown', handleKeydown);

    return () => {
      document.getElementById('app')?.removeAttribute('aria-hidden');
      document.body.removeEventListener('keydown', handleKeydown);
      document.getElementById('main')?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Overlay>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={id}
        className={styles.root}>
        {children}
      </section>
    </Overlay>
  );
};
