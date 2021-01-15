import React from 'react';
import styles from './index.module.scss';

type Props = {
  id: string;
  title: string;
  titleRef: React.MutableRefObject<HTMLHeadingElement | null>;
  onSubmit: (_event: React.FormEvent<HTMLFormElement>) => void;
};
export const FormWrapper: React.FC<Props> = ({
  id,
  title,
  titleRef,
  onSubmit,
  children,
}) => (
  <form onSubmit={onSubmit} id={id} className={styles.root}>
    <fieldset>
      <legend>
        <h2 className={styles.title} ref={titleRef} tabIndex={-1}>
          {title}
        </h2>
      </legend>
    </fieldset>
    {children}
  </form>
);
