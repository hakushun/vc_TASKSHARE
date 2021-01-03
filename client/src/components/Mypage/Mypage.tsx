import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectForm } from '../ProjectForm';
import { ProjectList } from '../ProjectList';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import { AddButton } from '../_atoms/AddButton';
import styles from './index.module.scss';

type Props = {
  projects: Project[];
  tasks: Task[];
  assignedTasks: Task[];
  handleAddProject: () => void;
  handleAddTask: () => void;
};
export const Mypage: React.VFC<Props> = ({
  projects,
  tasks,
  assignedTasks,
  handleAddProject,
  handleAddTask,
}) => (
  <>
    <ProjectForm />
    <TaskForm />
    <section className={styles.wrpper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Own Project List</h2>
        <AddButton target="プロジェクト" handleAdd={handleAddProject} />
      </div>
      <ProjectList context="open" projects={projects} tasks={tasks} />
    </section>
    <section className={styles.wrpper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Assigned Task List</h2>
        <AddButton target="タスク" handleAdd={handleAddTask} />
      </div>
      <TaskList context="open" tasks={assignedTasks} />
    </section>
  </>
);
