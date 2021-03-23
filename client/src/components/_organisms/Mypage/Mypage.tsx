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
import { ViewSwitch } from '../../_molecules/ViewSwitch';
import { View } from '../../../redux/modules/view';
import { TaskBoard } from '../TaskBoard';

export type Props = {
  projects: Project[];
  tasks: Task[];
  assignedTasks: Task[];
  currentView: View;
  handleAddProject: () => void;
  handleAddTask: () => void;
};
export const Mypage: React.VFC<Props> = ({
  projects,
  tasks,
  assignedTasks,
  currentView,
  handleAddProject,
  handleAddTask,
}) => (
  <>
    <ProjectForm />
    <TaskForm />
    <ViewSwitch />
    {currentView === 'list' && (
      <>
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
    )}
    {currentView === 'board' && (
      <section className={styles.wrpper}>
        <Heading title="Assigned Task Borad">
          <AddButton target="タスク" handleAdd={handleAddTask} />
        </Heading>
        <TaskBoard assignedTasks={assignedTasks} />
      </section>
    )}
  </>
);
