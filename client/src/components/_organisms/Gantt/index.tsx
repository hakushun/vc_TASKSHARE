import React from 'react';
import { useSelector } from 'react-redux';
import { withAuth } from '../../../helpers/withAuth';
import { selectOpenProjects } from '../../../redux/modules/projects';
import { selectTasks, getRelatedTasks } from '../../../redux/modules/tasks';
import { getUsername, selectUsers } from '../../../redux/modules/users';
import styles from './index.module.scss';

const Component: React.VFC = () => {
  const projects = useSelector(selectOpenProjects);
  const tasks = useSelector(selectTasks);
  const users = useSelector(selectUsers);

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.heading}>
              <div className={styles.headingTitle}>Title</div>
              <div className={styles.headingUsername}>Username</div>
            </div>
            <ul>
              {projects.map((project) => (
                <>
                  <li className={styles.row} key={project.id}>
                    <div className={styles.rowTitle}>{project.title}</div>
                    <div className={styles.rowUsername}>
                      {getUsername(users, project.ownerId)}
                    </div>
                  </li>
                  {getRelatedTasks(tasks, project.id!).map((task) => (
                    <li className={styles.row} key={task.id}>
                      <div className={styles.rowTitle}>
                        <img
                          src="/images/icon-corner-down-right.svg"
                          alt=""
                          width="24"
                          height="24"
                          className={styles.rowImg}
                        />
                        {task.title}
                      </div>
                      <div className={styles.rowUsername}>
                        {getUsername(users, task.assignTo)}
                      </div>
                    </li>
                  ))}
                </>
              ))}
            </ul>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.heading}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Gantt = withAuth(Component);
