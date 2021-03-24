import Link from 'next/link';
import React from 'react';
import { getStringDate } from '../../../libs/date';
import { toStringStatus } from '../../../libs/utils';
import { Task, TaskStatus } from '../../../redux/modules/task';
import styles from './index.module.scss';

type Props = {
  status: TaskStatus;
  assignedTasks: Task[];
  handleFocus: (_taskId: string, _projectId: string) => void;
};
export const TaskCardList: React.VFC<Props> = ({
  status,
  assignedTasks,
  handleFocus,
}) => (
  <div className={styles.root}>
    <h3 className={styles.status}>{toStringStatus(status)}</h3>
    <ul className={styles.list}>
      {assignedTasks
        .filter((task) => task.status === status)
        .map((task) => (
          <li key={task.id} className={styles.card}>
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
        ))}
    </ul>
  </div>
);
