import React, { useEffect, useRef } from 'react';
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
  const modalRef = useRef<HTMLElement | null>(null);

  const getFocusableElements = (
    ref: React.MutableRefObject<HTMLElement | null>,
  ) => {
    const focusableElementsString =
      'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"], [contenteditable]';
    return Array.prototype.slice.call(
      ref?.current?.querySelectorAll(focusableElementsString),
    ) as HTMLElement[];
  };

  const getNextFocusableElement = (
    ref: React.MutableRefObject<HTMLElement | null>,
    backward: boolean,
  ) => {
    const focusable = getFocusableElements(ref);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (backward && document.activeElement === first) return last;
    if (!backward && document.activeElement === last) return first;
    return null;
  };

  const handleTabDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const backward = e.shiftKey;
    const nextFocus = getNextFocusableElement(modalRef, backward);
    if (nextFocus) {
      e.preventDefault();
      nextFocus.focus();
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLElement>) => {
    switch (e.key) {
      case 'Escape':
        handleClose();
        break;
      case 'Tab':
        handleTabDown(e);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.getElementById('app')?.setAttribute('aria-hidden', 'true');

    return () => {
      document.getElementById('app')?.removeAttribute('aria-hidden');
      document.getElementById('main')?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
};
