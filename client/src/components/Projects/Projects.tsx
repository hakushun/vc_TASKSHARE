import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectForm } from '../ProjectForm';
import { ProjectList } from '../ProjectList';
import styles from './index.module.scss';

type Props = {
  openProjects: Project[];
  closeProjects: Project[];
  tasks: Task[];
  handleAddProject: () => void;
};
export const Projects: React.VFC<Props> = ({
  openProjects,
  closeProjects,
  tasks,
  handleAddProject,
}) => (
  <>
    <ProjectForm />
    <section className={styles.wrpper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Open Project List</h2>
        <button
          type="button"
          className={styles.action}
          onClick={() => handleAddProject()}>
          <img
            src="/images/icon-circle-plus.svg"
            alt="タスクを追加する"
            width="30"
            height="30"
          />
        </button>
      </div>
      <ProjectList context="open" projects={openProjects} tasks={tasks} />
    </section>
    <section className={styles.wrpper}>
      <h2 className={styles.title}>Close Project List</h2>
      <ProjectList context="close" projects={closeProjects} tasks={tasks} />
    </section>
  </>
);
