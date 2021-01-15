import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDialog,
  selectDialogMessage,
} from '../../../redux/modules/dialog';
import {
  selectProjectForm,
  toggleProjectForm,
} from '../../../redux/modules/modal';
import { selectProject } from '../../../redux/modules/project';
import {
  create,
  CreatePayload,
  selectIsLoading,
  update,
  UpdatePayload,
} from '../../../redux/modules/projects';
import { selectUsers } from '../../../redux/modules/users';
import { Dialog } from '../Dialog';
import { ProjectForm as Preasentational } from './ProjectForm';

export const ProjectForm: React.VFC = () => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const formIsOpened = useSelector(selectProjectForm);
  const project = useSelector(selectProject);
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const closeProjectModal = () => {
    dispatch(toggleProjectForm(false));
  };
  const createProject = (data: CreatePayload) => {
    dispatch(create(data));
  };
  const updateProject = (data: UpdatePayload) => {
    dispatch(update(data));
  };

  useEffect(() => {
    titleRef?.current?.focus();
  });

  return (
    <>
      {dialogIsOpened && <Dialog message={dialogMessage} />}
      {formIsOpened && (
        <Preasentational
          titleRef={titleRef}
          initialValues={project}
          isLoading={isLoading}
          users={users}
          closeProjectModal={closeProjectModal}
          createProject={createProject}
          updateProject={updateProject}
        />
      )}
    </>
  );
};
