import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../../helpers/withAuth';
import {
  getProjects,
  selectOpenProjects,
} from '../../../redux/modules/projects';
import { selectOpenTasks, getTasks } from '../../../redux/modules/tasks';
import { getInstance } from '../../../libs/db/getInstance';
import { Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { Gantt as Presentational } from './Gantt';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const db = getInstance();
  const projects = useSelector(selectOpenProjects);
  const tasks = useSelector(selectOpenTasks);

  useEffect(() => {
    db.collection('projects').onSnapshot((snapshot) => {
      const items: Project[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as Project));
      dispatch(getProjects(items));
    });
    db.collection('tasks').onSnapshot((snapshot) => {
      const items: Task[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as Task));
      dispatch(getTasks(items));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Presentational projects={projects} tasks={tasks} />;
};

export const Gantt = withAuth(Component);
