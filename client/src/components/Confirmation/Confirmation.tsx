import React from 'react';
import clsx from 'clsx';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';
import { Loading } from '../Loading';

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
  <Overlay>
    <section className={styles.comfirmation}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => handleClose()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <div className={styles.inner}>
        <div className={styles.title}>Delete Comfirmation</div>
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
    </section>
  </Overlay>
);
