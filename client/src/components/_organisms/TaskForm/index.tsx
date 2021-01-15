import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDialog,
  selectDialogMessage,
} from '../../../redux/modules/dialog';
import { selectTaskForm, toggleTaskForm } from '../../../redux/modules/modal';
import { selectProjects } from '../../../redux/modules/projects';
import { selectTask } from '../../../redux/modules/task';
import {
  create,
  CreatePayload,
  selectIsLoading,
  update,
  UpdatePayload,
} from '../../../redux/modules/tasks';
import { selectUsers } from '../../../redux/modules/users';
import { Dialog } from '../Dialog';
import { TaskForm as Preasentational } from './TaskForm';

export const TaskForm: React.VFC = () => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const formIsOpened = useSelector(selectTaskForm);
  const task = useSelector(selectTask);
  const isLoading = useSelector(selectIsLoading);
  const projects = useSelector(selectProjects);
  const users = useSelector(selectUsers);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const closeTaskModal = () => {
    dispatch(toggleTaskForm(false));
  };
  const createTask = (data: CreatePayload) => {
    dispatch(create(data));
  };
  const updateTask = (data: UpdatePayload) => {
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
          initialValues={task}
          isLoading={isLoading}
          projects={projects}
          users={users}
          closeTaskModal={closeTaskModal}
          createTask={createTask}
          updateTask={updateTask}
        />
      )}
    </>
  );
};
