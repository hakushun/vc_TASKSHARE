import React from 'react';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { ProjectForm } from '../ProjectForm';
import { ProjectList } from '../ProjectList';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import { AddButton } from '../../_atoms/AddButton';
import { Heading } from '../../_molecules/Heading';
import styles from './index.module.scss';
import { FilterController } from '../../_molecules/FilterController';

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
      <Heading title="Own Project List">
        <AddButton target="プロジェクト" handleAdd={handleAddProject} />
      </Heading>
      <ProjectList context="open" projects={projects} tasks={tasks} />
    </section>
    <section className={styles.wrpper}>
      <Heading title="Assigned Task List">
        <AddButton target="タスク" handleAdd={handleAddTask} />
      </Heading>
      <FilterController />
      <TaskList context="open" tasks={assignedTasks} />
    </section>
  </>
);
