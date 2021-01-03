import React from 'react';
import { Task } from '../../redux/modules/task';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import { AddButton } from '../_atoms/AddButton';
import { Heading } from '../_molecules/Heading';
import styles from './index.module.scss';

type Props = {
  openTasks: Task[];
  closeTasks: Task[];
  handleAddTask: () => void;
};
export const Tasks: React.VFC<Props> = ({
  openTasks,
  closeTasks,
  handleAddTask,
}) => (
  <>
    <TaskForm />
    <section className={styles.wrpper}>
      <Heading title="Open Task List">
        <AddButton target="タスク" handleAdd={handleAddTask} />
      </Heading>
      <TaskList context="open" tasks={openTasks} />
    </section>
    <section className={styles.wrpper}>
      <Heading title="Close Task List" />
      <TaskList context="close" tasks={closeTasks} />
    </section>
  </>
);
