import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import styles from './index.module.scss';
import { Task } from '../../redux/modules/task';
import { Project } from '../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../redux/modules/tasks';
import { Userdata } from '../../redux/modules/users';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { OptionalBadge } from '../_atoms/OptionalBadge';
import { InputLabel } from '../_atoms/InputLabel';
import { Textarea } from '../_atoms/Textarea';
import { Selectbox } from '../_atoms/Selectbox';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';

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
  <ModalWrapper>
    <CloseButton handleClose={closeTaskModal} />
    <Form
      onSubmit={initialValues.id ? updateTask : createTask}
      initialValues={initialValues}
      subscription={{ submitting: true }}
      render={({ handleSubmit }) => (
        <FormWrapper title="Task Form" onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="task_project" label="Project" />
              <RequiredBadge />
            </div>
            <Selectbox name="projectId" id="task_project">
              <option value="">Choose a Owner</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </Selectbox>
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
            <Selectbox name="assignTo" id="task_assignTo">
              <option value="">Choose a Owner</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </Selectbox>
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
            <Textarea
              name="description"
              id="task_description"
              placeholder="Task Description"
              disabled={isLoading}
              required={false}
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
                {initialValues.id ? 'Update Task' : 'Create Task'}
              </button>
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
