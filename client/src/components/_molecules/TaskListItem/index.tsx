import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getStringDate } from '../../../libs/date';
import { toStringStatus } from '../../../libs/utils';
import { focus, Task } from '../../../redux/modules/task';
import styles from './index.module.scss';

type Props = {
  task: Task;
};
export const TaskListItem: React.VFC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const handleFocus = (taskId: string, projectId: string) => {
    dispatch(focus({ id: taskId, projectId }));
  };

  return (
    <li className={styles.root}>
      <Link href={`/tasks/${task.id}`}>
        <a
          id={`tasks_${task.id}`}
          className={styles.link}
          onClick={() => handleFocus(task.id!, task.projectId)}
          onKeyPress={() => handleFocus(task.id!, task.projectId)}>
          <div className={styles.status}>{toStringStatus(task.status)}</div>
          <div className={styles.name}>{task.title}</div>
          <div className={styles.duedate}>{getStringDate(task.dueDate)}</div>
        </a>
      </Link>
    </li>
  );
};
