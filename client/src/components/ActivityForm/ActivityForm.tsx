import React from 'react';
import { Form, Field } from 'react-final-form';
import { Loading } from '../_atoms/Loading';
import styles from './index.module.scss';
import { Activity } from '../../redux/modules/activity';
import { CreatePayload, UpdatePayload } from '../../redux/modules/activities';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { InputLabel } from '../_atoms/InputLabel';
import { Textarea } from '../_atoms/Textarea';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';

type Props = {
  initialValues: Activity;
  isLoading: boolean;
  closeActivityModal: () => void;
  createActivity: (_data: CreatePayload) => void;
  updateActivity: (_data: UpdatePayload) => void;
};
export const ActivityForm: React.VFC<Props> = ({
  initialValues,
  isLoading,
  closeActivityModal,
  createActivity,
  updateActivity,
}) => (
  <ModalWrapper>
    <CloseButton handleClose={closeActivityModal} />
    <Form
      onSubmit={initialValues.id ? updateActivity : createActivity}
      initialValues={initialValues}
      subscription={{ submitting: true }}
      render={({ handleSubmit }) => (
        <FormWrapper title="Activity Form" onSubmit={handleSubmit}>
          <Field
            name="projectId"
            component="input"
            aria-hidden="true"
            className={styles.hidden}></Field>
          <Field
            name="taskId"
            component="input"
            aria-hidden="true"
            className={styles.hidden}></Field>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="activity_comment" label="Comment" />
              <RequiredBadge />
            </div>
            <Textarea
              name="comment"
              id="activity_comment"
              placeholder="Comment"
              disabled={isLoading}
              required
            />
          </div>
          <div className={styles.actionWrapper}>
            {isLoading ? (
              <Loading />
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className={styles.action}>
                {initialValues.id ? 'Update Activity' : 'Create Activity'}
              </button>
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
