import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTask, TaskStatus } from '../../../redux/modules/task';
import { update } from '../../../redux/modules/tasks';
import styles from './index.module.scss';

type Props = {
  label: string;
  status: TaskStatus;
};
export const StatusListButton: React.VFC<Props> = ({ label, status }) => {
  const dispatch = useDispatch();
  const task = useSelector(selectTask);

  const updateTaskStatus = (taskStatus: TaskStatus) => {
    dispatch(
      update({
        id: task.id!,
        projectId: task.projectId,
        title: task.title,
        startDate: task.startDate,
        dueDate: task.dueDate,
        description: task.description,
        status: taskStatus,
        userId: task.userId!,
        assignTo: task.assignTo,
        createdAt: task.createdAt!,
        updatedAt: task.updatedAt!,
      }),
    );
  };

  return (
    <li className={styles.root}>
      <button
        type="button"
        className={styles.button}
        onClick={() => updateTaskStatus(status)}>
        {label}
      </button>
    </li>
  );
};
