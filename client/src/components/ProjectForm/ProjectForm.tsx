import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Optional } from '../Badge/Optional';
import { Required } from '../Badge/Required';
import { Project } from '../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../redux/modules/projects';
import { Userdata } from '../../redux/modules/users';

type Props = {
  initialValues: Project;
  isLoading: boolean;
  users: Userdata[];
  closeProjectModal: () => void;
  createProject: (_data: CreatePayload) => void;
  updateProject: (_data: UpdatePayload) => void;
};
export const ProjectForm: React.VFC<Props> = ({
  initialValues,
  isLoading,
  users,
  closeProjectModal,
  createProject,
  updateProject,
}) => (
  <Overlay>
    <section className={styles.root}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => closeProjectModal()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <Form
        onSubmit={initialValues.id ? updateProject : createProject}
        subscription={{ submitting: true }}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Project Form</h2>
              </legend>
              <Field
                name="title"
                validate={composeValidators(isRequired)}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ input, meta }) => (
                  <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                      <label htmlFor="project_title" className={styles.label}>
                        Title
                      </label>
                      <Required />
                    </div>
                    <input
                      id="project_title"
                      type="text"
                      placeholder="Project Title"
                      disabled={isLoading}
                      maxLength={100}
                      className={clsx(
                        styles.input,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      {...input}
                    />
                  </div>
                )}
              </Field>
              <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                  <label htmlFor="project_owner" className={styles.label}>
                    Owner
                  </label>
                  <Required />
                </div>
                <div className={styles.selectboxWrapper}>
                  <Field
                    name="ownerId"
                    validate={composeValidators(isRequired)}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}>
                    {({ input, meta }) => (
                      <select
                        id="project_owner"
                        className={clsx(
                          styles.selectbox,
                          meta.touched && meta.error && styles.hasError,
                        )}
                        {...input}>
                        <option value="">Choose a Owner</option>
                        {users.map((user) => (
                          <option key={user.id} value={user.id}>
                            {user.username}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                </div>
              </div>
              <Field
                name="dueDate"
                validate={composeValidators(isRequired)}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ input, meta }) => (
                  <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                      <label htmlFor="project_dueDate" className={styles.label}>
                        Due date
                      </label>
                      <Required />
                    </div>
                    <input
                      id="project_dueDate"
                      type="date"
                      placeholder="Project Due date"
                      disabled={isLoading}
                      className={clsx(
                        styles.input,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      {...input}
                    />
                  </div>
                )}
              </Field>
              <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                  <label htmlFor="project_detail" className={styles.label}>
                    Detail
                  </label>
                  <Optional />
                </div>
                <Field
                  name="detail"
                  component="textarea"
                  id="project_detail"
                  placeholder="Project Detail"
                  disabled={isLoading}
                  className={styles.textarea}
                  maxLength="3000"
                  subscription={{
                    value: true,
                    active: true,
                    error: true,
                    touched: true,
                  }}></Field>
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
                  {initialValues.id ? 'Update' : 'Create'}
                </button>
              )}
            </div>
          </form>
        )}
      />
    </section>
  </Overlay>
);
