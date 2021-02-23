import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { focus, Project } from '../../../redux/modules/project';
import { Task } from '../../../redux/modules/task';
import { selectUsers } from '../../../redux/modules/users';
import { ProjectListItem as Presentational } from './ProjectListItem';

type Props = {
  project: Project;
  tasks: Task[];
};
export const ProjectListItem: React.VFC<Props> = ({ tasks, project }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleFocus = (id: string) => {
    dispatch(focus({ id }));
  };

  return (
    <Presentational
      tasks={tasks}
      project={project}
      users={users}
      handleFocus={handleFocus}
    />
  );
};
