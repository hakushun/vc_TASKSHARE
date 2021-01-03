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
import { getStringDate } from '../../libs/date';
import { toStringStatus } from '../../libs/utils';
import { Activity } from '../../redux/modules/activity';
import { Project } from '../../redux/modules/project';
import { Userdata } from '../../redux/modules/users';
import { Confirmation } from '../Confirmation';
import { AddButton } from '../_atoms/AddButton';
import { SubHeadingWithBorder } from '../_molecules/SubHeadingWithBorder';
import { EditButton } from '../_atoms/EditButton';
import { DeleteButton } from '../_atoms/DeleteButton';

type Props = {
  isOpened: boolean;
  project: Project;
  task: typeTask;
  relatedTasks: typeTask[];
  relatedActivities: Activity[];
  assignUer: Userdata | undefined;
  createUer: Userdata | undefined;
  user: Userdata;
  isLoading: boolean;
  toggleList: () => void;
  handleFocus: (_id: string) => void;
  handleAddTask: (_projectId: string) => void;
  handleEditTask: (_id: string) => void;
  handleAddActivity: (_taskId: string) => void;
  handleRemoveTask: (_id: string) => void;
  openConfirmation: () => void;
};
export const Task: React.VFC<Props> = ({
  isOpened,
  project,
  task,
  relatedTasks,
  relatedActivities,
  assignUer,
  createUer,
  user,
  isLoading,
  handleFocus,
  toggleList,
  handleAddTask,
  handleEditTask,
  handleAddActivity,
  handleRemoveTask,
  openConfirmation,
}) => (
  <>
    <TaskForm />
    <ActivityForm />
    <Confirmation
      isLoading={isLoading}
      id={task.id!}
      handleRemove={handleRemoveTask}
    />
    <section className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{task.title}</h2>
        {user.id === task.userId || user.id === task.assignTo ? (
          <>
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
          </>
        ) : (
          <div className={styles.status}>{toStringStatus(task.status)}</div>
        )}
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
        <SubHeadingWithBorder title="Task Overview">
          {(user.id === task.userId || user.id === task.assignTo) && (
            <EditButton
              target="タスク"
              id={task.id!}
              handleEdit={handleEditTask}
              width="30"
              height="30"
            />
          )}
        </SubHeadingWithBorder>
        <div className={styles.inner}>
          <dl className={clsx(styles.item, styles.description)}>
            <dt className={styles.label}>Description</dt>
            <dd className={styles.detail}>{task.description}</dd>
          </dl>
          <dl className={clsx(styles.item, styles.assignTo)}>
            <dt className={styles.label}>Assign to</dt>
            <dd className={styles.definition}>
              {assignUer?.username || 'undefined'}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.createdBy)}>
            <dt className={styles.label}>Created By</dt>
            <dd className={styles.definition}>
              {createUer?.username || 'undefined'}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.startDate)}>
            <dt className={styles.label}>Start Date</dt>
            <dd className={styles.definition}>
              {getStringDate(task.startDate)}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.dueDate)}>
            <dt className={styles.label}>Due Date</dt>
            <dd className={styles.definition}>{getStringDate(task.dueDate)}</dd>
          </dl>
          <dl className={clsx(styles.item, styles.createdAt)}>
            <dt className={styles.label}>Created at</dt>
            <dd className={styles.definition}>
              {getStringDate(task.createdAt!)}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.updatedAt)}>
            <dt className={styles.label}>Updated at</dt>
            <dd className={styles.definition}>
              {getStringDate(task.updatedAt!)}
            </dd>
          </dl>
        </div>
      </div>
      {(user.id === task.userId || user.id === task.assignTo) && (
        <DeleteButton target="タスク" handleOpen={openConfirmation} />
      )}
      <div className={styles.wrapper}>
        <SubHeadingWithBorder title={`Task List in ${project.title}`}>
          <AddButton
            target="タスク"
            id={task.projectId}
            handleAddWithId={handleAddTask}
          />
        </SubHeadingWithBorder>
        <TaskList context="open" tasks={relatedTasks} />
      </div>
      <div className={styles.wrapper}>
        <SubHeadingWithBorder title="Activities">
          <AddButton
            target="アクティビティ"
            id={task.id!}
            handleAddWithId={handleAddActivity}
          />
        </SubHeadingWithBorder>
        <ActivityList activities={relatedActivities} />
      </div>
    </section>
  </>
);
