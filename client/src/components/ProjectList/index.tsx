import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInstance } from '../../libs/db/getInstance';
import { focus, Project } from '../../redux/modules/project';
import { getProjects } from '../../redux/modules/projects';
import { Task } from '../../redux/modules/task';
import { getTasks } from '../../redux/modules/tasks';
import { ProjectList as Presentational } from './ProjectList';

type Props = {
  context: 'open' | 'close';
  projects: Project[];
  tasks: Task[];
};
export const ProjectList: React.VFC<Props> = ({ context, projects, tasks }) => {
  const dispatch = useDispatch();
  const db = getInstance();

  const handleFocus = (id: string) => {
    dispatch(focus({ id }));
  };

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

  return (
    <Presentational
      context={context}
      projects={projects}
      tasks={tasks}
      handleFocus={handleFocus}
    />
  );
};
