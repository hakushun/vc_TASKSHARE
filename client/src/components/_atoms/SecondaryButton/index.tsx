import React from 'react';
import styles from './index.module.scss';

type Props = {
  label: string;
  type: 'button' | 'submit';
  disabled: boolean;
  handleClick: () => void;
};
export const SecondaryButton: React.VFC<Props> = ({
  label,
  type,
  disabled,
  arg,
  handleClick,
}) => (
  <button
    className={styles.root}
    type={type}
    disabled={disabled}
    onClick={() => handleClick()}>
    {label}
  </button>
);
