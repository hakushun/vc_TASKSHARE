import React from 'react';
import { Form, Field } from 'react-final-form';
import clsx from 'clsx';
import { composeValidators, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
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
                  <InputLabel id="project_title" label="Title" />
                  <RequiredBadge />
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
                  required
                  aria-required
                  {...input}
                />
              </div>
            )}
          </Field>
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
                  <InputLabel id="project_startDate" label="Start date" />
                  <RequiredBadge />
                </div>
                <input
                  id="project_startDate"
                  type="date"
                  placeholder="Project Start date"
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
                  <InputLabel id="project_dueDate" label="Due date" />
                  <RequiredBadge />
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
                  required
                  aria-required
                  {...input}
                />
              </div>
            )}
          </Field>
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
