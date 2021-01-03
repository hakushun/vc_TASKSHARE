import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTask, TaskStatus } from '../../redux/modules/task';
import { update } from '../../redux/modules/tasks';
import { TaskStatusList as Presentational } from './TaskStatusList';

export const TaskStatusList: React.VFC = () => {
  const dispatch = useDispatch();
  const task = useSelector(selectTask);

  const updateTaskStatus = (status: TaskStatus) => {
    dispatch(
      update({
        id: task.id!,
        projectId: task.projectId,
        title: task.title,
        startDate: task.startDate,
        dueDate: task.dueDate,
        description: task.description,
        status,
        userId: task.userId!,
        assignTo: task.assignTo,
        createdAt: task.createdAt!,
        updatedAt: task.updatedAt!,
      }),
    );
  };
  return <Presentational updateTaskStatus={updateTaskStatus} />;
};
