import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { focus as focusProject, Project } from '../../../redux/modules/project';
import { focus as focusTask, Task } from '../../../redux/modules/task';
import styles from './index.module.scss';
import { getUsername, selectUsers } from '../../../redux/modules/users';
import { getRelatedTasks } from '../../../redux/modules/tasks';

type Props = {
  projects: Project[];
  tasks: Task[];
};
export const GanttTaskList: React.VFC<Props> = ({ projects, tasks }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleFocusProject = (id: string) => {
    dispatch(focusProject({ id }));
  };

  const handleFocusTask = (taskId: string, projectId: string) => {
    dispatch(focusTask({ id: taskId, projectId }));
  };

  return (
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
};
