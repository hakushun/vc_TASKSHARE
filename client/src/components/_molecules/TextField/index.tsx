import React from 'react';
import { InputLabel } from '../../_atoms/InputLabel';
import { OptionalBadge } from '../../_atoms/OptionalBadge';
import { RequiredBadge } from '../../_atoms/RequiredBadge';
import { TextInput } from '../../_atoms/TextInput';
import styles from './index.module.scss';

type Props = {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
};
export const TextField: React.VFC<Props> = ({
  label,
  type,
  name,
  id,
  placeholder,
  disabled,
  required,
  minLength,
  maxLength,
  autoComplete,
}) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <InputLabel id={id} label={label} />
      {required ? <RequiredBadge /> : <OptionalBadge />}
    </div>
    <TextInput
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      autoComplete={autoComplete}
    />
  </div>
);
