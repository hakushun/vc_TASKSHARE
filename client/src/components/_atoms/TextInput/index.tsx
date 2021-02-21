import React from 'react';
import { Field } from 'react-final-form';
import clsx from 'clsx';
import styles from './index.module.scss';
import { getValidateFunction } from '../../../libs/validations';

type Propps = {
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
export const TextInput: React.VFC<Propps> = ({
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
  <Field
    name={name}
    validate={getValidateFunction(type)}
    subscription={{
      value: true,
      active: true,
      error: true,
      touched: true,
    }}>
    {({ input, meta }) => (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className={clsx(
          styles.input,
          meta.touched && meta.error && styles.hasError,
        )}
        required={required}
        aria-required={required}
        {...input}
      />
    )}
  </Field>
);
