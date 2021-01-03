import React from 'react';
import { Form } from 'react-final-form';
import { Loading } from '../_atoms/Loading';
import styles from './index.module.scss';
import { Task } from '../../redux/modules/task';
import { Project } from '../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../redux/modules/tasks';
import { Userdata } from '../../redux/modules/users';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { InputLabel } from '../_atoms/InputLabel';
import { Selectbox } from '../_atoms/Selectbox';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';
import { TextField } from '../_molecules/TextField';
import { TextareaField } from '../_molecules/TextareaField';

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
          <TextField
            label="Title"
            type="text"
            name="title"
            id="task_title"
            placeholder="Task Title"
            disabled={isLoading}
            maxLength={100}
            required
          />
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
          <TextField
            label="Start date"
            type="date"
            name="startDate"
            id="task_startDate"
            placeholder="Task Start date"
            disabled={isLoading}
            required
          />
          <TextField
            label="Due date"
            type="date"
            name="startDate"
            id="task_startDate"
            placeholder="Task Start date"
            disabled={isLoading}
            required
          />
          <TextareaField
            label="Description"
            name="description"
            id="task_description"
            placeholder="Task Description"
            disabled={isLoading}
            required={false}
          />
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
