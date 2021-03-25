import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { ConnectDragSource } from 'react-dnd';
import { getStringDate } from '../../../libs/date';
import { Task } from '../../../redux/modules/task';
import styles from './index.module.scss';

type Props = {
  task: Task;
  isDragging: boolean;
  handleFocus: (_taskId: string, _projectId: string) => void;
  drag: ConnectDragSource;
};
export const TaskCard: React.VFC<Props> = ({
  task,
  isDragging,
  handleFocus,
  drag,
}) => (
  <li className={clsx(styles.root, isDragging && styles.isDragging)} ref={drag}>
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
