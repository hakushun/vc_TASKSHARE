import React from 'react';
import { Task } from '../../../redux/modules/task';
import { Project as typeProject } from '../../../redux/modules/project';
import { ActivityForm } from '../ActivityForm';
import { ActivityList } from '../ActivityList';
import { ProjectForm } from '../ProjectForm';
import { TaskForm } from '../TaskForm';
import { TaskList } from '../TaskList';
import styles from './index.module.scss';
import { Activity } from '../../../redux/modules/activity';
import { Userdata } from '../../../redux/modules/users';
import { Confirmation } from '../Confirmation';
import { AddButton } from '../../_atoms/AddButton';
import { SubHeadingWithBorder } from '../../_molecules/SubHeadingWithBorder';
import { EditButton } from '../../_atoms/EditButton';
import { DeleteButton } from '../../_atoms/DeleteButton';
import { HeadingWithBorder } from '../../_molecules/HeadingWithBorder';
import { ProjectOverview } from '../../_molecules/ProjectOverview';
import { Progress } from '../../_molecules/Progress';
import { StatusController } from '../../_molecules/StatusController';

type Props = {
  project: typeProject;
  tasks: Task[];
  relatedTasks: Task[];
  relatedActivities: Activity[];
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
  tasks,
  relatedTasks,
  relatedActivities,
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
      <HeadingWithBorder title={project.title}>
        <Progress tasks={tasks} projectId={project.id!} />
      </HeadingWithBorder>
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
        <ProjectOverview />
      </div>
      {(user.id === project.userId || user.id === project.ownerId) && (
        <DeleteButton target="プロジェクト" handleOpen={openConfirmation} />
      )}
      <div className={styles.wrapper}>
        <SubHeadingWithBorder title="Task List">
          <AddButton
            target="タスク"
            id={project.id!}
            handleAddWithId={handleAddTask}
          />
        </SubHeadingWithBorder>
        <StatusController />
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
