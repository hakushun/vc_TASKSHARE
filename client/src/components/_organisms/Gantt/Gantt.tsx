import React from 'react';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { GanttChart } from '../../_molecules/GanttChart';
import { GanttTaskList } from '../../_molecules/GanttTaskList';
import { Heading } from '../../_molecules/Heading';
import styles from './index.module.scss';

export type Props = {
  projects: Project[];
  tasks: Task[];
};
export const Gantt: React.VFC<Props> = ({ projects, tasks }) => (
  <section className={styles.root}>
    <Heading title="Gantt Chart" />
    <div className={styles.wrapper}>
      <GanttTaskList projects={projects} tasks={tasks} />
      <GanttChart projects={projects} tasks={tasks} />
    </div>
  </section>
);
