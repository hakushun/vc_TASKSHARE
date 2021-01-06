import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import { focus, Project } from '../../../redux/modules/project';
import { calculateProgress } from '../../../redux/modules/tasks';
import { Task } from '../../../redux/modules/task';
import { getUsername, selectUsers } from '../../../redux/modules/users';

type Props = {
  project: Project;
  tasks: Task[];
};
export const ProjectListItem: React.VFC<Props> = ({ tasks, project }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

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
          <div className={styles.owner}>
            {getUsername(users, project.ownerId)}
          </div>
          <div className={styles.name}>{project.title}</div>
          <div className={styles.progress}>
            <progress
              className={styles.progressBar}
              value={calculateProgress(tasks, project.id!)}
              max="100"></progress>
          </div>
        </a>
      </Link>
    </li>
  );
};
