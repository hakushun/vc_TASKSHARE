import React from 'react';
import styles from './index.module.scss';

export type Props = {
  label: string;
  type: 'button' | 'submit';
  disabled: boolean;
  arg?: string;
  handleClick?: (() => void) | ((_arg: string) => void);
};
export const PrimaryButton: React.VFC<Props> = ({
  label,
  type,
  disabled,
  arg,
  handleClick,
}) => (
  <>
    {arg && handleClick ? (
      <button
        className={styles.root}
        type={type}
        disabled={disabled}
        onClick={() => handleClick(arg)}>
        {label}
      </button>
    ) : (
      <button className={styles.root} type={type} disabled={disabled}>
        {label}
      </button>
    )}
  </>
);
