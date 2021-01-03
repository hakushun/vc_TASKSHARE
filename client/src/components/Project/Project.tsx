import React from 'react';
import clsx from 'clsx';
import { Task } from '../../redux/modules/task';
import { Project as typeProject } from '../../redux/modules/project';
import { ActivityForm } from '../ActivityForm';
import { ActivityList } from '../ActivityList';
import { ProjectForm } from '../ProjectForm';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';
import { getStringDate } from '../../libs/date';
import { calculateProgress } from '../../redux/modules/tasks';
import { Activity } from '../../redux/modules/activity';
import { Userdata } from '../../redux/modules/users';
import { Confirmation } from '../Confirmation';
import { AddButton } from '../_atoms/AddButton';
import { SubHeadingWithBorder } from '../_molecules/SubHeadingWithBorder';
import { EditButton } from '../_atoms/EditButton';

type Props = {
  project: typeProject;
  relatedTasks: Task[];
  relatedActivities: Activity[];
  owner: Userdata | undefined;
  createUser: Userdata | undefined;
  user: Userdata;
  isLoading: boolean;
  handleEditProject: (_id: string) => void;
  handleAddTask: (_projectId: string) => void;
  handleAddActivity: (_projectId: string) => void;
  handleRemoveProject: (_id: string) => void;
  openConfirmation: () => void;
};
export const Project: React.VFC<Props> = ({
  project,
  relatedTasks,
  relatedActivities,
  owner,
  createUser,
  user,
  isLoading,
  handleEditProject,
  handleAddTask,
  handleAddActivity,
  handleRemoveProject,
  openConfirmation,
}) => (
  <>
    <ProjectForm />
    <TaskForm />
    <ActivityForm />
    <Confirmation
      isLoading={isLoading}
      id={project.id!}
      handleRemove={handleRemoveProject}
    />
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
        <SubHeadingWithBorder title="Project Overview">
          {(user.id === project.userId || user.id === project.ownerId) && (
            <EditButton
              target="プロジェクト"
              id={project.id!}
              handleEdit={handleEditProject}
              width="30"
              height="30"
            />
          )}
        </SubHeadingWithBorder>
        <div className={styles.inner}>
          <dl className={clsx(styles.item, styles.description)}>
            <dt className={styles.label}>Detail</dt>
            <dd className={styles.detail}>{project.detail}</dd>
          </dl>
          <dl className={clsx(styles.item, styles.owner)}>
            <dt className={styles.label}>Owner</dt>
            <dd className={styles.definition}>
              {owner?.username || 'undefined'}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.createdBy)}>
            <dt className={styles.label}>Created By</dt>
            <dd className={styles.definition}>
              {createUser?.username || 'undefined'}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.startDate)}>
            <dt className={styles.label}>Start Date</dt>
            <dd className={styles.definition}>
              {getStringDate(project.startDate)}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.dueDate)}>
            <dt className={styles.label}>Due Date</dt>
            <dd className={styles.definition}>
              {getStringDate(project.dueDate)}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.createdAt)}>
            <dt className={styles.label}>Created at</dt>
            <dd className={styles.definition}>
              {getStringDate(project.createdAt!)}
            </dd>
          </dl>
          <dl className={clsx(styles.item, styles.updatedAt)}>
            <dt className={styles.label}>Updated at</dt>
            <dd className={styles.definition}>
              {getStringDate(project.updatedAt!)}
            </dd>
          </dl>
        </div>
      </div>
      {(user.id === project.userId || user.id === project.ownerId) && (
        <div>
          <button
            type="button"
            className={styles.delete}
            onClick={() => openConfirmation()}>
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
        <SubHeadingWithBorder title="Task List">
          <AddButton
            target="タスク"
            id={project.id!}
            handleAddWithId={handleAddTask}
          />
        </SubHeadingWithBorder>
        <TaskList context="open" tasks={relatedTasks} />
      </div>
      <div className={styles.wrapper}>
        <SubHeadingWithBorder title="Activities">
          <AddButton
            target="アクティビティ"
            id={project.id!}
            handleAddWithId={handleAddActivity}
          />
        </SubHeadingWithBorder>
        <ActivityList activities={relatedActivities} />
      </div>
    </section>
  </>
);
