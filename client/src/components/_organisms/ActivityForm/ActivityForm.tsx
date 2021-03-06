import React from 'react';
import { Form, Field } from 'react-final-form';
import { Loading } from '../../_atoms/Loading';
import styles from './index.module.scss';
import { Activity } from '../../../redux/modules/activity';
import {
  CreatePayload,
  UpdatePayload,
} from '../../../redux/modules/activities';
import { CloseButton } from '../../_atoms/CloseButton';
import { FormWrapper } from '../../_molecules/FormWrapper';
import { ModalWrapper } from '../../_molecules/ModalWrapper';
import { TextareaField } from '../../_molecules/TextareaField';
import { PrimaryButton } from '../../_atoms/PrimaryButton';

export type Props = {
  titleRef: React.MutableRefObject<HTMLHeadingElement | null>;
  initialValues: Activity;
  isLoading: boolean;
  closeActivityModal: () => void;
  createActivity: (_data: CreatePayload) => void;
  updateActivity: (_data: UpdatePayload) => void;
};
export const ActivityForm: React.VFC<Props> = ({
  titleRef,
  initialValues,
  isLoading,
  closeActivityModal,
  createActivity,
  updateActivity,
}) => (
  <ModalWrapper id="activity_form" handleClose={closeActivityModal}>
    <CloseButton handleClose={closeActivityModal} />
    <Form
      onSubmit={initialValues.id ? updateActivity : createActivity}
      initialValues={initialValues}
      subscription={{ submitting: true }}
      render={({ handleSubmit }) => (
        <FormWrapper
          id="activity_form"
          title="Activity Form"
          titleRef={titleRef}
          onSubmit={handleSubmit}>
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
          <TextareaField
            label="Comment"
            name="comment"
            id="activity_comment"
            placeholder="Comment"
            disabled={isLoading}
            required
          />
          <div className={styles.buttonWrapper}>
            {isLoading ? (
              <Loading />
            ) : (
              <PrimaryButton
                label={initialValues.id ? 'Update Activity' : 'Create Activity'}
                type="submit"
                disabled={isLoading}
              />
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
