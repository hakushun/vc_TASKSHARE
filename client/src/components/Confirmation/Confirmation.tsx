import React from 'react';
import styles from './index.module.scss';
import { Loading } from '../_atoms/Loading';
import { CloseButton } from '../_atoms/CloseButton';
import { ModalWrapper } from '../_molecules/ModalWrapper';
import { PrimaryButton } from '../_atoms/PrimaryButton';
import { SecondaryButton } from '../_atoms/SecondaryButton';

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
      <div className={styles.buttonWrapper}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <PrimaryButton
              label="Delete"
              type="submit"
              disabled={isLoading}
              arg={id}
              handleClick={handleRemove}
            />
            <SecondaryButton
              label="Cancel"
              type="submit"
              disabled={false}
              handleClick={handleClose}
            />
          </>
        )}
      </div>
    </div>
  </ModalWrapper>
);
