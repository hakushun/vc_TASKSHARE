import React from 'react';
import { Form } from 'react-final-form';
import { Loading } from '../_atoms/Loading';
import styles from './index.module.scss';
import { Task } from '../../redux/modules/task';
import { Project } from '../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../redux/modules/tasks';
import { Userdata } from '../../redux/modules/users';
import { CloseButton } from '../_atoms/CloseButton';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';
import { TextField } from '../_molecules/TextField';
import { TextareaField } from '../_molecules/TextareaField';
import { SelectboxField } from '../_molecules/SelectboxField';
import { PrimaryButton } from '../_atoms/PrimaryButton';

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
          <SelectboxField
            id="task_project"
            label="Project"
            name="projectId"
            required>
            <option value="">Choose a Project</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </SelectboxField>
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
          <SelectboxField
            id="task_assignTo"
            label="Assgin to"
            name="assignTo"
            required>
            <option value="">Assign to User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </SelectboxField>
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
          <div className={styles.buttonWrapper}>
            {isLoading ? (
              <Loading />
            ) : (
              <PrimaryButton
                label={initialValues.id ? 'Update Task' : 'Create Task'}
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
