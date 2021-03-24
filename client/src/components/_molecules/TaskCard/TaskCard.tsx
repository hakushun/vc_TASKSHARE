import Link from 'next/link';
import React from 'react';
import { getStringDate } from '../../../libs/date';
import { Task } from '../../../redux/modules/task';
import styles from './index.module.scss';

type Props = {
  task: Task;
  handleFocus: (_taskId: string, _projectId: string) => void;
};
export const TaskCard: React.VFC<Props> = ({ task, handleFocus }) => (
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
        {task.title}
      </a>
    </Link>
  </li>
);
