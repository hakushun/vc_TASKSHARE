import React, { useEffect } from 'react';
import { generateDateArray } from '../../../libs/date';
import { renderChart } from '../../../libs/gantt';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { GanttChart as Presentational } from './GanttChart';

type Props = {
  projects: Project[];
  tasks: Task[];
};
export const GanttChart: React.VFC<Props> = ({ projects, tasks }) => {
  const dateArray = generateDateArray(61);

  useEffect(() => {
    renderChart();
    window.addEventListener('resize', renderChart);

    return () => {
      window.removeEventListener('resize', renderChart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects, tasks]);

  return (
    <Presentational projects={projects} tasks={tasks} dateArray={dateArray} />
  );
};
