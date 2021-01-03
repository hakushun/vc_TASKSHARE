import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { focus, Project } from '../../../redux/modules/project';
import {
  calculateProgress,
  countOpenRelatedTasks,
} from '../../../redux/modules/tasks';
import { Task } from '../../../redux/modules/task';

type Props = {
  project: Project;
  tasks: Task[];
};
export const ProjectListItem: React.VFC<Props> = ({ tasks, project }) => {
  const dispatch = useDispatch();

  const handleFocus = (id: string) => {
    dispatch(focus({ id }));
  };

  return (
    <li className={styles.root}>
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
  );
};
