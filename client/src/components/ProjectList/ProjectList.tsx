import Link from 'next/link';
import React from 'react';
import { Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import {
  calculateProgress,
  countOpenRelatedTasks,
} from '../../redux/modules/tasks';
import { ProjectListHeader } from '../ProjectListHeader';
import { ListNoItems } from '../_molecules/ListNoItems';
import styles from './index.module.scss';

type Props = {
  context: 'open' | 'close';
  projects: Project[];
  tasks: Task[];
  handleFocus: (_id: string) => void;
};
export const ProjectList: React.VFC<Props> = ({
  context,
  projects,
  tasks,
  handleFocus,
}) => (
  <div className={styles.wrapper}>
    <ProjectListHeader context={context} />
    <ul className={styles.list}>
      {projects.length === 0 ? (
        <ListNoItems />
      ) : (
        <>
          {projects.map((project) => (
            <li className={styles.item} key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <a
                  id={`projects_${project.id}`}
                  className={styles.link}
                  onClick={() => handleFocus(project.id!)}
                  onKeyPress={() => handleFocus(project.id!)}>
                  <div className={styles.status}>
                    <progress
                      className={styles.statusBar}
                      value={calculateProgress(tasks, project.id!)}
                      max="100"></progress>
                  </div>
                  <div className={styles.name}>{project.title}</div>
                  <div className={styles.task}>
                    {countOpenRelatedTasks(tasks, project.id!)}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  </div>
);
