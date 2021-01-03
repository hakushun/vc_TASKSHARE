import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { Task } from '../../redux/modules/task';
import { Project } from '../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../redux/modules/tasks';
import { Userdata } from '../../redux/modules/users';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { OptionalBadge } from '../_atoms/OptionalBadge';
import { InputLabel } from '../_atoms/InputLabel';

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
      <CloseButton handleClose={closeTaskModal} />
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
                  <InputLabel id="task_project" label="Project" />
                  <RequiredBadge />
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
                      <InputLabel id="task_title" label="Title" />
                      <RequiredBadge />
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
                  <InputLabel id="task_assignTo" label="Assgin to" />
                  <RequiredBadge />
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
                      <InputLabel id="task_startDate" label="Start date" />
                      <RequiredBadge />
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
                      <InputLabel id="task_dueDate" label="Due date" />
                      <RequiredBadge />
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
                  <InputLabel id="task_description" label="Description" />
                  <OptionalBadge />
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
