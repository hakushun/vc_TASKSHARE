import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Mypage as Presentational } from './Mypage';
import { withAuth } from '../../helpers/withAuth';
import { selectOwnProjects } from '../../redux/modules/projects';
import { selectAssignedTasks, selectTasks } from '../../redux/modules/tasks';
import { add as addProject } from '../../redux/modules/project';
import { add as addTask } from '../../redux/modules/task';

const Component: React.VFC = () => {
  const dispatch = useDispatch();

  const ownProjects = useSelector(selectOwnProjects);
  const tasks = useSelector(selectTasks);
  const assignedTasks = useSelector(selectAssignedTasks);

  const handleAddProject = () => {
    dispatch(addProject());
  };
  const handleAddTask = () => {
    dispatch(addTask(null));
  };
  return (
    <Presentational
      projects={ownProjects}
      tasks={tasks}
      assignedTasks={assignedTasks}
      handleAddProject={handleAddProject}
      handleAddTask={handleAddTask}
    />
  );
};

export const Mypage = withAuth(Component);
