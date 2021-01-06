import React from 'react';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { ProjectListHeader } from '../../_molecules/ProjectListHeader';
import { ListNoItems } from '../../_molecules/ListNoItems';
import { ProjectListItem } from '../../_molecules/ProjectListItem';
import styles from './index.module.scss';

type Props = {
  context: 'open' | 'close';
  projects: Project[];
  tasks: Task[];
};
export const ProjectList: React.VFC<Props> = ({ context, projects, tasks }) => (
  <div className={styles.wrapper}>
    <ProjectListHeader context={context} />
    <ul className={styles.list}>
      {projects.length === 0 ? (
        <ListNoItems />
      ) : (
        <>
          {projects.map((project) => (
            <ProjectListItem project={project} tasks={tasks} key={project.id} />
          ))}
        </>
      )}
    </ul>
  </div>
);
