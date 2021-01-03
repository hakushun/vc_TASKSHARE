import React from 'react';
import styles from './index.module.scss';

type Props = {
  title: string;
  onSubmit: (_event: React.FormEvent<HTMLFormElement>) => void;
};
export const FormWrapper: React.FC<Props> = ({ title, onSubmit, children }) => (
  <form onSubmit={onSubmit} className={styles.root}>
    <fieldset>
      <legend>
        <h2 className={styles.title}>{title}</h2>
      </legend>
    </fieldset>
    {children}
  </form>
);
