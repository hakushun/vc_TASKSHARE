import Link from 'next/link';
import React from 'react';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { calculateProgress } from '../../../redux/modules/tasks';
import { getUsername, Userdata } from '../../../redux/modules/users';
import styles from './index.module.scss';

export type Props = {
  project: Project;
  tasks: Task[];
  users: Userdata[];
  handleFocus: (_id: string) => void;
};
export const ProjectListItem: React.VFC<Props> = ({
  tasks,
  project,
  users,
  handleFocus,
}) => (
  <li className={styles.root}>
    <Link href={`/projects/${project.id}`}>
      <a
        id={`projects_${project.id}`}
        aria-label={`プロジェクト名：${project.title}、オーナー：${getUsername(
          users,
          project.ownerId,
        )}、進捗${calculateProgress(tasks, project.id!)}％`}
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
