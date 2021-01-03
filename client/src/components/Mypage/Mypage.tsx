import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectForm } from '../ProjectForm';
import { ProjectList } from '../ProjectList';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
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
        <button
          type="button"
          className={styles.action}
          onClick={() => handleAddProject()}>
          <img
            src="/images/icon-circle-plus.svg"
            alt="プロジェクトを追加する"
            width="30"
            height="30"
          />
        </button>
      </div>
      <ProjectList context="open" projects={projects} tasks={tasks} />
    </section>
    <section className={styles.wrpper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Assigned Task List</h2>
        <button
          type="button"
          className={styles.action}
          onClick={() => handleAddTask()}>
          <img
            src="/images/icon-circle-plus.svg"
            alt="タスクを追加する"
            width="30"
            height="30"
          />
        </button>
      </div>
      <TaskList context="open" tasks={assignedTasks} />
    </section>
  </>
);
