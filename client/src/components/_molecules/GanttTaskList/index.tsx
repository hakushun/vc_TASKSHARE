import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { focus as focusProject, Project } from '../../../redux/modules/project';
import { focus as focusTask, Task } from '../../../redux/modules/task';
import { selectUsers } from '../../../redux/modules/users';
import { GanttTaskList as Presentational } from './GanttTaskList';

type Props = {
  projects: Project[];
  tasks: Task[];
};
export const GanttTaskList: React.VFC<Props> = ({ projects, tasks }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleFocusProject = (id: string) => {
    dispatch(focusProject({ id }));
  };

  const handleFocusTask = (taskId: string, projectId: string) => {
    dispatch(focusTask({ id: taskId, projectId }));
  };

  return (
    <Presentational
      projects={projects}
      tasks={tasks}
      users={users}
      handleFocusProject={handleFocusProject}
      handleFocusTask={handleFocusTask}
    />
  );
};
