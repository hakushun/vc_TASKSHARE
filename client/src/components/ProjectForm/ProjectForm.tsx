import React from 'react';
import { Form } from 'react-final-form';
import { Loading } from '../_atoms/Loading';
import styles from './index.module.scss';
import { Project } from '../../redux/modules/project';
import { CreatePayload, UpdatePayload } from '../../redux/modules/projects';
import { Userdata } from '../../redux/modules/users';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { OptionalBadge } from '../_atoms/OptionalBadge';
import { InputLabel } from '../_atoms/InputLabel';
import { Textarea } from '../_atoms/Textarea';
import { Selectbox } from '../_atoms/Selectbox';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';
import { TextInput } from '../_atoms/TextInput';

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
  <ModalWrapper>
    <CloseButton handleClose={closeProjectModal} />
    <Form
      onSubmit={initialValues.id ? updateProject : createProject}
      subscription={{ submitting: true }}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <FormWrapper title="Project Form" onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="project_title" label="Title" />
              <RequiredBadge />
            </div>
            <TextInput
              type="text"
              name="title"
              id="project_title"
              placeholder="Project Title"
              disabled={isLoading}
              maxLength={100}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="project_owner" label="Owner" />
              <RequiredBadge />
            </div>
            <Selectbox name="ownerId" id="project_owner">
              <option value="">Choose a Owner</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </Selectbox>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="project_startDate" label="Start date" />
              <RequiredBadge />
            </div>
            <TextInput
              type="date"
              name="startDate"
              id="project_startDate"
              placeholder="Start date"
              disabled={isLoading}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="project_dueDate" label="Due date" />
              <RequiredBadge />
            </div>
            <TextInput
              type="date"
              name="dueDate"
              id="project_dueDate"
              placeholder="Due date"
              disabled={isLoading}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="project_detail" label="Detail" />
              <OptionalBadge />
            </div>
            <Textarea
              name="detail"
              id="project_detail"
              placeholder="Project Detail"
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
                {initialValues.id ? 'Update Project' : 'Create Project'}
              </button>
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
