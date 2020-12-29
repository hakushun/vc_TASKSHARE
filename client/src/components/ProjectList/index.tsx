import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFirestore } from '../../libs/db/useFirestore';
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
  const { fetchProjects } = useFirestore();

  const handleFocus = (id: string) => {
    dispatch(focus({ id }));
  };

  useEffect(() => {
    fetchProjects();
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
