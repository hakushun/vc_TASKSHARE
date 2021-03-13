import React from 'react';
import { Field } from 'react-final-form';
import clsx from 'clsx';
import styles from './index.module.scss';
import { composeValidators, isRequired } from '../../../libs/validations';

export type Props = {
  name: string;
  id: string;
};
export const Selectbox: React.FC<Props> = ({ name, id, children }) => (
  <div className={styles.root}>
    <Field
      name={name}
      validate={composeValidators(isRequired)}
      subscription={{
        value: true,
        active: true,
        error: true,
        touched: true,
      }}>
      {({ input, meta }) => (
        <select
          id={id}
          className={clsx(
            styles.selectbox,
            meta.touched && meta.error && styles.hasError,
          )}
          required
          aria-required
          {...input}>
          {children}
        </select>
      )}
    </Field>
  </div>
);
