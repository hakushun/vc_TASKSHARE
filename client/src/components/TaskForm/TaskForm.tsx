import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Optional } from '../Badge/Optional';
import { Required } from '../Badge/Required';
import { Task } from '../../redux/modules/task';
import { Project } from '../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../redux/modules/tasks';
import { Userdata } from '../../redux/modules/users';

type Props = {
  initialValues: Task;
  isLoading: boolean;
  projects: Project[];
  users: Userdata[];
  closeTaskModal: () => void;
  createTask: (_data: CreatePayload) => void;
  updateTask: (_data: UpdatePayload) => void;
};
export const TaskForm: React.VFC<Props> = ({
  initialValues,
  isLoading,
  projects,
  users,
  closeTaskModal,
  createTask,
  updateTask,
}) => (
  <Overlay>
    <section className={styles.root}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => closeTaskModal()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <Form
        onSubmit={initialValues.id ? updateTask : createTask}
        initialValues={initialValues}
        subscription={{ submitting: true }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Task Form</h2>
              </legend>
              <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                  <label htmlFor="task_project" className={styles.label}>
                    Project
                  </label>
                  <Required />
                </div>
                <div className={styles.selectboxWrapper}>
                  <Field
                    name="projectId"
                    validate={composeValidators(isRequired)}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}>
                    {({ input, meta }) => (
                      <select
                        id="task_project"
                        className={clsx(
                          styles.selectbox,
                          meta.touched && meta.error && styles.hasError,
                        )}
                        required
                        aria-required
                        {...input}>
                        <option value="">Choose a Project</option>
                        {projects.map((project) => (
                          <option key={project.id} value={project.id}>
                            {project.title}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                </div>
              </div>
              <Field
                name="title"
                validate={composeValidators(isRequired)}
                disabled={isLoading}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ input, meta }) => (
                  <div className={styles.inputWrapper}>
                    <div className={styles.labelWrapper}>
                      <label htmlFor="task_title" className={styles.label}>
                        Title
                      </label>
                      <Required />
                    </div>
                    <input
                      id="task_title"
                      type="text"
                      placeholder="Task Title"
                      disabled={isLoading}
                      maxLength={100}
                      className={clsx(
                        styles.input,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      required
                      aria-required
                      {...input}
                    />
                  </div>
                )}
              </Field>
              <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                  <label htmlFor="task_assignTo" className={styles.label}>
                    Assgin to
                  </label>
                  <Required />
                </div>
                <div className={styles.selectboxWrapper}>
                  <Field
                    name="assignTo"
                    validate={composeValidators(isRequired)}
                    subscription={{
                      value: true,
                      active: true,
                      error: true,
                      touched: true,
                    }}>
                    {({ input, meta }) => (
                      <select
                        id="task_assignTo"
                        className={clsx(
                          styles.selectbox,
                          meta.touched && meta.error && styles.hasError,
                        )}
                        required
                        aria-required
                        {...input}>
                        <option value="">Assign to User</option>
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
                name="startDate"
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
                      <label htmlFor="task_startDate" className={styles.label}>
                        Start date
                      </label>
                      <Required />
                    </div>
                    <input
                      id="task_startDate"
                      type="date"
                      placeholder="Task Start date"
                      disabled={isLoading}
                      className={clsx(
                        styles.input,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      required
                      aria-required
                      {...input}
                    />
                  </div>
                )}
              </Field>
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
                      <label htmlFor="task_dueDate" className={styles.label}>
                        Due date
                      </label>
                      <Required />
                    </div>
                    <input
                      id="task_dueDate"
                      type="date"
                      placeholder="Task Due date"
                      disabled={isLoading}
                      className={clsx(
                        styles.input,
                        meta.touched && meta.error && styles.hasError,
                      )}
                      required
                      aria-required
                      {...input}
                    />
                  </div>
                )}
              </Field>
              <div className={styles.inputWrapper}>
                <div className={styles.labelWrapper}>
                  <label htmlFor="task_description" className={styles.label}>
                    Description
                  </label>
                  <Optional />
                </div>
                <Field
                  name="description"
                  component="textarea"
                  id="task_description"
                  placeholder="Task Description"
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
                  {initialValues.id ? 'Update Task' : 'Create Task'}
                </button>
              )}
            </div>
          </form>
        )}
      />
    </section>
  </Overlay>
);
