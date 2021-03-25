import React from 'react';
import clsx from 'clsx';
import { ConnectDropTarget } from 'react-dnd';
import { toStringStatus } from '../../../libs/utils';
import { Task, TaskStatus } from '../../../redux/modules/task';
import { TaskCard } from '../TaskCard';
import styles from './index.module.scss';

type Props = {
  status: TaskStatus;
  assignedTasks: Task[];
  isOver: boolean;
  drop: ConnectDropTarget;
};
export const TaskCardList: React.VFC<Props> = ({
  status,
  assignedTasks,
  isOver,
  drop,
}) => (
  <div className={clsx(styles.root, isOver && styles.isOver)} ref={drop}>
    <h3 className={styles.status}>{toStringStatus(status)}</h3>
    <ul className={styles.list}>
      {assignedTasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </ul>
  </div>
);
