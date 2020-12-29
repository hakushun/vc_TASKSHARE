import React from 'react';
import { useDispatch } from 'react-redux';
import { focus, Project } from '../../redux/modules/project';
import { Task } from '../../redux/modules/task';
import { ProjectList as Presentational } from './ProjectList';

type Props = {
  context: 'open' | 'close';
  projects: Project[];
  tasks: Task[];
};
export const ProjectList: React.VFC<Props> = ({ context, projects, tasks }) => {
  const dispatch = useDispatch();

  const handleFocus = (id: string) => {
    dispatch(focus({ id }));
  };

  return (
    <Presentational
      context={context}
      projects={projects}
      tasks={tasks}
      handleFocus={handleFocus}
    />
  );
};
