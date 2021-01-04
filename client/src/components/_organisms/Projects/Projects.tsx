import React from 'react';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { ProjectForm } from '../ProjectForm';
import { ProjectList } from '../ProjectList';
import { AddButton } from '../../_atoms/AddButton';
import { Heading } from '../../_molecules/Heading';
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
      <Heading title="Open Project List">
        <AddButton target="プロジェクト" handleAdd={handleAddProject} />
      </Heading>
      <ProjectList context="open" projects={openProjects} tasks={tasks} />
    </section>
    <section className={styles.wrpper}>
      <Heading title="Close Project List" />
      <ProjectList context="close" projects={closeProjects} tasks={tasks} />
    </section>
  </>
);
