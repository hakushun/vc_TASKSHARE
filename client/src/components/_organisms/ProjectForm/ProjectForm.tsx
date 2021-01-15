import React from 'react';
import { Form } from 'react-final-form';
import { Loading } from '../../_atoms/Loading';
import styles from './index.module.scss';
import { Project } from '../../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../../redux/modules/projects';
import { Userdata } from '../../../redux/modules/users';
import { CloseButton } from '../../_atoms/CloseButton';
import { FormWrapper } from '../../_molecules/FormWrapper';
import { ModalWrapper } from '../../_molecules/ModalWrapper';
import { TextField } from '../../_molecules/TextField';
import { TextareaField } from '../../_molecules/TextareaField';
import { SelectboxField } from '../../_molecules/SelectboxField';
import { PrimaryButton } from '../../_atoms/PrimaryButton';

type Props = {
  titleRef: React.MutableRefObject<HTMLHeadingElement | null>;
  initialValues: Project;
  isLoading: boolean;
  users: Userdata[];
  closeProjectModal: () => void;
  createProject: (_data: CreatePayload) => void;
  updateProject: (_data: UpdatePayload) => void;
};
export const ProjectForm: React.VFC<Props> = ({
  titleRef,
  initialValues,
  isLoading,
  users,
  closeProjectModal,
  createProject,
  updateProject,
}) => (
  <ModalWrapper id="project_form" handleClose={closeProjectModal}>
    <CloseButton handleClose={closeProjectModal} />
    <Form
      onSubmit={initialValues.id ? updateProject : createProject}
      subscription={{ submitting: true }}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <FormWrapper
          id="project_form"
          title="Project Form"
          titleRef={titleRef}
          onSubmit={handleSubmit}>
          <TextField
            label="Title"
            type="text"
            name="title"
            id="project_title"
            placeholder="Project Title"
            disabled={isLoading}
            maxLength={100}
            required
          />
          <SelectboxField
            id="project_owner"
            label="Owner"
            name="ownerId"
            required>
            <option value="">Choose a Owner</option>
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
            id="project_startDate"
            placeholder="Start date"
            disabled={isLoading}
            required
          />
          <TextField
            label="Due date"
            type="date"
            name="dueDate"
            id="project_dueDate"
            placeholder="Due date"
            disabled={isLoading}
            required
          />
          <TextareaField
            label="Detail"
            name="detail"
            id="project_detail"
            placeholder="Project Detail"
            disabled={isLoading}
            required={false}
          />
          <div className={styles.buttonWrapper}>
            {isLoading ? (
              <Loading />
            ) : (
              <PrimaryButton
                label={initialValues.id ? 'Update Project' : 'Create Project'}
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
