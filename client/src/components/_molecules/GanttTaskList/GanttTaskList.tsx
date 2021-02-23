import Link from 'next/link';
import React from 'react';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { getRelatedTasks } from '../../../redux/modules/tasks';
import { getUsername, Userdata } from '../../../redux/modules/users';
import styles from './index.module.scss';

export type Props = {
  projects: Project[];
  tasks: Task[];
  users: Userdata[];
  handleFocusProject: (_id: string) => void;
  handleFocusTask: (_taskId: string, _projectId: string) => void;
};
export const GanttTaskList: React.VFC<Props> = ({
  projects,
  tasks,
  users,
  handleFocusProject,
  handleFocusTask,
}) => (
  <div className={styles.root}>
    <div className={styles.heading}>
      <div className={styles.headingTitle}>Title</div>
      <div className={styles.headingUsername}>Username</div>
    </div>
    <ul className={styles.list}>
      {projects.map((project) => (
        <>
          <li id={project.id!} className={styles.row} key={project.id}>
            <div className={styles.title}>
              <Link href={`/projects/${project.id}`}>
                <a
                  className={styles.link}
                  onClick={() => handleFocusProject(project.id!)}
                  onKeyPress={() => handleFocusProject(project.id!)}>
                  {project.title}
                </a>
              </Link>
            </div>
            <div className={styles.username}>
              {getUsername(users, project.ownerId)}
            </div>
          </li>
          {getRelatedTasks(tasks, project.id!).map((task) => (
            <li id={task.id!} className={styles.row} key={task.id}>
              <div className={styles.title}>
                <img
                  src="/images/icon-corner-down-right.svg"
                  alt=""
                  width="24"
                  height="24"
                  className={styles.img}
                />
                <Link href={`/tasks/${task.id}`}>
                  <a
                    className={styles.link}
                    onClick={() => handleFocusTask(task.id!, project.id!)}
                    onKeyPress={() => handleFocusTask(task.id!, project.id!)}>
                    {task.title}
                  </a>
                </Link>
              </div>
              <div className={styles.username}>
                {getUsername(users, task.assignTo)}
              </div>
            </li>
          ))}
        </>
      ))}
    </ul>
  </div>
);
