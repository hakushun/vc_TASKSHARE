import React from 'react';
import { Form, Field } from 'react-final-form';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Activity } from '../../redux/modules/activity';
import { CreatePayload, UpdatePayload } from '../../redux/modules/activities';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { InputLabel } from '../_atoms/InputLabel';
import { Textarea } from '../_atoms/Textarea';

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
  <Overlay>
    <section className={styles.root}>
      <CloseButton handleClose={closeActivityModal} />
      <Form
        onSubmit={initialValues.id ? updateActivity : createActivity}
        initialValues={initialValues}
        subscription={{ submitting: true }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Activity Form</h2>
              </legend>
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
            </fieldset>
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
          </form>
        )}
      />
    </section>
  </Overlay>
);
