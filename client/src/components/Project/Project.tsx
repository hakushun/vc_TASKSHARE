import React from 'react';
import { Task } from '../../redux/modules/task';
import { Project as typeProject } from '../../redux/modules/project';
import { ActivityForm } from '../ActivityForm';
import { ActivityList } from '../ActivityList';
import { ProjectForm } from '../ProjectForm';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';
import { getStaringDate } from '../../libs/date';
import { calculateProgress } from '../../redux/modules/tasks';
import { Activity } from '../../redux/modules/activity';
import { Userdata } from '../../redux/modules/users';

type Props = {
  project: typeProject;
  relatedTasks: Task[];
  relatedActivities: Activity[];
  owner: Userdata | undefined;
  user: Userdata;
  hadleEditProject: (_id: string) => void;
  hadleAddTask: (_projectId: string) => void;
  hadleAddActivity: (_projectId: string) => void;
  handleRemoveProject: (_id: string) => void;
};
export const Project: React.VFC<Props> = ({
  project,
  relatedTasks,
  relatedActivities,
  owner,
  user,
  hadleEditProject,
  hadleAddTask,
  hadleAddActivity,
  handleRemoveProject,
}) => (
  <>
    <ProjectForm />
    <TaskForm />
    <ActivityForm />
    <section className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{project.title}</h2>
        <div className={styles.status}>
          <span className={styles.statusText}>{`${calculateProgress(
            relatedTasks,
            project.id!,
          )}%`}</span>
          <progress
            className={styles.statusBar}
            value={calculateProgress(relatedTasks, project.id!)}
            max="100"></progress>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>Project Overview</h3>
          {(user.id === project.userId || user.id === project.ownerId) && (
            <button
              type="button"
              className={styles.action}
              onClick={() => hadleEditProject(project.id!)}>
              <img
                src="/images/icon-edit.svg"
                alt="プロジェクトを編集する"
                width="30"
                height="30"
              />
            </button>
          )}
        </div>
        <div className={styles.inner}>
          <dl className={styles.projectItem}>
            <dt className={styles.projectLabel}>Detail</dt>
            <dd className={styles.projectDescription}>{project.detail}</dd>
          </dl>
          <dl className={styles.projectItem}>
            <dt className={styles.projectLabel}>Owner</dt>
            <dd className={styles.projectDescription}>
              {owner?.username || 'undefined'}
            </dd>
          </dl>
          <dl className={styles.projectItem}>
            <dt className={styles.projectLabel}>Due Date</dt>
            <dd className={styles.projectDescription}>
              {getStaringDate(project.dueDate)}
            </dd>
          </dl>
          <dl className={styles.projectItem}>
            <dt className={styles.projectLabel}>Created at</dt>
            <dd className={styles.projectDescription}>
              {getStaringDate(project.createdAt!)}
            </dd>
          </dl>
          <dl className={styles.projectItem}>
            <dt className={styles.projectLabel}>Updated at</dt>
            <dd className={styles.projectDescription}>
              {getStaringDate(project.updatedAt!)}
            </dd>
          </dl>
        </div>
      </div>
      {(user.id === project.userId || user.id === project.ownerId) && (
        <div>
          <button
            type="button"
            className={styles.delete}
            onClick={() => handleRemoveProject(project.id!)}>
            Delete
            <img
              src="/images/icon-trash.svg"
              alt="プロジェクトを削除する"
              width="20"
              height="20"
            />
          </button>
        </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>Task List</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => hadleAddTask(project.id!)}>
            <img
              src="/images/icon-circle-plus.svg"
              alt="タスクを追加する"
              width="30"
              height="30"
            />
          </button>
        </div>
        <TaskList context="open" tasks={relatedTasks} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>Activities</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => hadleAddActivity(project.id!)}>
            <img
              src="/images/icon-circle-plus.svg"
              alt="アクティビティを追加する"
              width="30"
              height="30"
            />
          </button>
        </div>
        <ActivityList activities={relatedActivities} />
      </div>
    </section>
  </>
);
