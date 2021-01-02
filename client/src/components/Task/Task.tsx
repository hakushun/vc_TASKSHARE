import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { ActivityList } from '../ActivityList';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';
import { TaskStatusList } from '../TaskStatusList';
import { TaskForm } from '../TaskForm';
import { ActivityForm } from '../ActivityForm';
import { Task as typeTask } from '../../redux/modules/task';
import { getStaringDate } from '../../libs/date';
import { toStringStatus } from '../../libs/utils';
import { Activity } from '../../redux/modules/activity';
import { Project } from '../../redux/modules/project';
import { Userdata } from '../../redux/modules/users';

type Props = {
  isOpened: boolean;
  project: Project;
  task: typeTask;
  relatedTasks: typeTask[];
  relatedActivities: Activity[];
  assignUer: Userdata | undefined;
  user: Userdata;
  toggleList: () => void;
  handleFocus: (_id: string) => void;
  hadleAddTask: (_projectId: string) => void;
  hadleEditTask: (_id: string) => void;
  hadleAddActivity: (_taskId: string) => void;
  handleRemoveTask: (_id: string) => void;
};
export const Task: React.VFC<Props> = ({
  isOpened,
  project,
  task,
  relatedTasks,
  relatedActivities,
  assignUer,
  user,
  handleFocus,
  toggleList,
  hadleAddTask,
  hadleEditTask,
  hadleAddActivity,
  handleRemoveTask,
}) => (
  <>
    <TaskForm />
    <ActivityForm />
    <section className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{task.title}</h2>
        <button className={styles.status} onClick={() => toggleList()}>
          {toStringStatus(task.status)}
        </button>
        <div
          aria-hidden={!isOpened}
          className={clsx(
            styles.statusListWrapper,
            isOpened && styles.isOpened,
          )}>
          <TaskStatusList />
        </div>
      </div>
      <div className={styles.linkWrapper}>
        <Link href={`/projects/${task.projectId}`}>
          <a
            className={styles.link}
            onClick={() => handleFocus(task.projectId)}
            onKeyPress={() => handleFocus(task.projectId)}>
            {project.title}
          </a>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>Task Overview</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => hadleEditTask(task.id!)}>
            <img
              src="/images/icon-edit.svg"
              alt="タスクを編集する"
              width="30"
              height="30"
            />
          </button>
        </div>
        <div className={styles.inner}>
          <dl className={styles.item}>
            <dt className={styles.label}>Description</dt>
            <dd className={styles.description}>{task.description}</dd>
          </dl>
          <dl className={styles.item}>
            <dt className={styles.label}>Assign to</dt>
            <dd className={styles.description}>{assignUer?.username}</dd>
          </dl>
          <dl className={styles.item}>
            <dt className={styles.label}>Due Date</dt>
            <dd className={styles.description}>
              {getStaringDate(task.dueDate)}
            </dd>
          </dl>
          <dl className={styles.item}>
            <dt className={styles.label}>Created at</dt>
            <dd className={styles.description}>
              {getStaringDate(task.createdAt!)}
            </dd>
          </dl>
          <dl className={styles.item}>
            <dt className={styles.label}>Updated at</dt>
            <dd className={styles.description}>
              {getStaringDate(task.updatedAt!)}
            </dd>
          </dl>
        </div>
      </div>
      {(user.id === task.userId || user.id === task.assignTo) && (
        <div>
          <button
            type="button"
            className={styles.delete}
            onClick={() => handleRemoveTask(task.id!)}>
            Delete
            <img
              src="/images/icon-trash.svg"
              alt="タスクを削除する"
              width="20"
              height="20"
            />
          </button>
        </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.subheading}>
          <h3 className={styles.subtitle}>Task List in {project.title}</h3>
          <button
            type="button"
            className={styles.action}
            onClick={() => hadleAddTask(task.projectId)}>
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
            onClick={() => hadleAddActivity(task.id!)}>
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
