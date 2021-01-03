import React from 'react';
import { InputLabel } from '../../_atoms/InputLabel';
import { OptionalBadge } from '../../_atoms/OptionalBadge';
import { RequiredBadge } from '../../_atoms/RequiredBadge';
import { Selectbox } from '../../_atoms/Selectbox';
import styles from './index.module.scss';

type Props = {
  label: string;
  name: string;
  id: string;
  required: boolean;
};
export const SelectboxField: React.FC<Props> = ({
  label,
  name,
  id,
  required,
  children,
}) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <InputLabel id={id} label={label} />
      {required ? <RequiredBadge /> : <OptionalBadge />}
    </div>
    <Selectbox name={name} id={id}>
      {children}
    </Selectbox>
  </div>
);
