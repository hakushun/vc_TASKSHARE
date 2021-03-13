import React from 'react';
import { Field } from 'react-final-form';
import clsx from 'clsx';
import styles from './index.module.scss';
import { composeValidators, isRequired } from '../../../libs/validations';

export type Props = {
  name: string;
  id: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
};
export const Textarea: React.VFC<Props> = ({
  name,
  id,
  placeholder,
  disabled,
  required,
}) => (
  <>
    {required ? (
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
          <textarea
            id={id}
            placeholder={placeholder}
            className={clsx(
              styles.root,
              meta.touched && meta.error && styles.hasError,
            )}
            disabled={disabled}
            maxLength={3000}
            required
            aria-required
            {...input}
          />
        )}
      </Field>
    ) : (
      <Field
        name={name}
        subscription={{
          value: true,
          active: true,
          error: true,
          touched: true,
        }}>
        {({ input }) => (
          <textarea
            id={id}
            placeholder={placeholder}
            className={styles.root}
            disabled={disabled}
            maxLength={3000}
            {...input}
          />
        )}
      </Field>
    )}
  </>
);
