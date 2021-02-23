import Link from 'next/link';
import React from 'react';
import { getStringDate } from '../../../libs/date';
import { toStringStatus } from '../../../libs/utils';
import { Task } from '../../../redux/modules/task';
import styles from './index.module.scss';

export type Props = {
  task: Task;
  handleFocus: (_taskId: string, _projectId: string) => void;
};
export const TaskListItem: React.VFC<Props> = ({ task, handleFocus }) => (
  <li className={styles.root}>
    <Link href={`/tasks/${task.id}`}>
      <a
        id={`tasks_${task.id}`}
        aria-label={`タスク名：${task.title}、ステータス：${
          task.status
        }、期限${getStringDate(task.dueDate)}`}
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
