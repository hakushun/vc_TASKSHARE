import React, { useEffect } from 'react';
import clsx from 'clsx';
import { generateDateArray } from '../../../libs/date';
import { renderChart } from '../../../libs/gantt';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { getRelatedTasks } from '../../../redux/modules/tasks';
import styles from './index.module.scss';

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
    <div id="gantt_chart" className={styles.root}>
      <div className={styles.heading}>
        <div className={styles.headingRow}>
          {dateArray.map((date) => (
            <span
              className={clsx(
                styles.headingCell,
                date.day() === 6 && styles.saturday,
                date.day() === 0 && styles.sunday,
              )}
              key={date.toJSON()}>
              {date.month() + 1}
            </span>
          ))}
        </div>
        <div className={styles.headingRow}>
          {dateArray.map((date) => (
            <span
              id={date.format('YYYY-MM-DD')}
              className={clsx(
                styles.headingCell,
                date.day() === 6 && styles.saturday,
                date.day() === 0 && styles.sunday,
              )}
              key={date.toJSON()}>
              {date.date()}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.body}>
        {projects.map((project) => (
          <>
            <div key={project.id} className={styles.bodyRow}>
              {dateArray.map((date) => (
                <span
                  className={clsx(
                    styles.bodyCell,
                    date.day() === 6 && styles.saturday,
                    date.day() === 0 && styles.sunday,
                  )}
                  key={date.toJSON()}></span>
              ))}
              <div
                className={styles.chart}
                data-id={project.id}
                data-startdate={project.startDate}
                data-duedate={project.dueDate}
                data-item="chart"></div>
            </div>
            {getRelatedTasks(tasks, project.id!).map((task) => (
              <div key={task.id} className={styles.bodyRow}>
                {dateArray.map((date) => (
                  <span
                    className={clsx(
                      styles.bodyCell,
                      date.day() === 6 && styles.saturday,
                      date.day() === 0 && styles.sunday,
                    )}
                    key={date.toJSON()}></span>
                ))}
                <div
                  className={styles.chart}
                  data-id={task.id}
                  data-startdate={task.startDate}
                  data-duedate={task.dueDate}
                  data-item="chart"></div>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
