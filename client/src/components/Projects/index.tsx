import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { add } from '../../redux/modules/project';
import {
  selectOpenProjects,
  selectCloseProjects,
} from '../../redux/modules/projects';
import { selectTasks } from '../../redux/modules/tasks';
import { Projects as Presentational } from './Projects';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const openProjects = useSelector(selectOpenProjects);
  const closeProjects = useSelector(selectCloseProjects);
  const tasks = useSelector(selectTasks);

  const handleAddProject = () => {
    dispatch(add());
  };
  return (
    <Presentational
      openProjects={openProjects}
      closeProjects={closeProjects}
      tasks={tasks}
      handleAddProject={handleAddProject}
    />
  );
};

export const Projects = withAuth(Component);
