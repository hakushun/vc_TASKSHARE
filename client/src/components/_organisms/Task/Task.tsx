import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { ActivityList } from '../ActivityList';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';
import { TaskStatusList } from '../../_molecules/TaskStatusList';
import { TaskForm } from '../TaskForm';
import { ActivityForm } from '../ActivityForm';
import { Task as typeTask } from '../../../redux/modules/task';
import { toStringStatus } from '../../../libs/utils';
import { Activity } from '../../../redux/modules/activity';
import { Project } from '../../../redux/modules/project';
import { Userdata } from '../../../redux/modules/users';
import { Confirmation } from '../Confirmation';
import { AddButton } from '../../_atoms/AddButton';
import { SubHeadingWithBorder } from '../../_molecules/SubHeadingWithBorder';
import { EditButton } from '../../_atoms/EditButton';
import { DeleteButton } from '../../_atoms/DeleteButton';
import { HeadingWithBorder } from '../../_molecules/HeadingWithBorder';
import { TaskOverview } from '../../_molecules/TaskOverview';
import { StatusButton } from '../../_atoms/StatusButton';

type Props = {
  isOpened: boolean;
  project: Project;
  task: typeTask;
  relatedTasks: typeTask[];
  relatedActivities: Activity[];
  user: Userdata;
  isLoading: boolean;
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
  user,
  isLoading,
  handleFocus,
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
      <HeadingWithBorder title={task.title}>
        {user.id === task.userId || user.id === task.assignTo ? (
          <>
            <StatusButton />
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
      </HeadingWithBorder>
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
        <TaskOverview />
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
