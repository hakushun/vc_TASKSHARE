import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Loading } from '../Loading';
import { CloseButton } from '../_atoms/CloseButton';
import { ModalWrapper } from '../_molecules/ModalWrapper';

type Props = {
  isLoading: boolean;
  id: string;
  handleRemove: (_id: string) => void;
  handleClose: () => void;
};
export const Confirmation: React.VFC<Props> = ({
  isLoading,
  id,
  handleRemove,
  handleClose,
}) => (
  <ModalWrapper>
    <CloseButton handleClose={handleClose} />
    <div className={styles.inner}>
      <div className={styles.title}>Delete Confirmation</div>
      <div className={styles.message}>
        Are you sure you want to delete this item?
      </div>
      <div className={styles.actionWrapper}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <button
              className={clsx(styles.action, styles.delete)}
              type="button"
              onClick={() => handleRemove(id)}>
              Delete
            </button>
            <button
              className={clsx(styles.action, styles.cancel)}
              type="button"
              onClick={() => handleClose()}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  </ModalWrapper>
);
