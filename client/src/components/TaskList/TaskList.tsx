import React from 'react';
import { Task } from '../../redux/modules/task';
import { TaskListHeader } from '../TaskListHeader';
import { ListNoItems } from '../_molecules/ListNoItems';
import { TaskListItem } from '../_molecules/TaskListItem';
import styles from './index.module.scss';

type Props = {
  context: 'open' | 'close';
  tasks: Task[];
};
export const TaskList: React.VFC<Props> = ({ context, tasks }) => (
  <div className={styles.wrapper}>
    <TaskListHeader context={context} />
    <ul className={styles.list}>
      {tasks.length === 0 ? (
        <ListNoItems />
      ) : (
        <>
          {tasks.map((task) => (
            <TaskListItem task={task} key={task.id} />
          ))}
        </>
      )}
    </ul>
  </div>
);
