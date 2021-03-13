import React from 'react';
import { InputLabel } from '../../_atoms/InputLabel';
import { OptionalBadge } from '../../_atoms/OptionalBadge';
import { RequiredBadge } from '../../_atoms/RequiredBadge';
import { Textarea } from '../../_atoms/Textarea';
import styles from './index.module.scss';

export type Props = {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
};
export const TextareaField: React.VFC<Props> = ({
  label,
  name,
  id,
  placeholder,
  disabled,
  required,
}) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <InputLabel id={id} label={label} />
      {required ? <RequiredBadge /> : <OptionalBadge />}
    </div>
    <Textarea
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
  </div>
);
