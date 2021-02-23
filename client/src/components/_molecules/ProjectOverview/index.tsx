import React from 'react';
import { useSelector } from 'react-redux';
import { selectProject } from '../../../redux/modules/project';
import {
  selectOwner,
  selectUserCreateProject,
} from '../../../redux/modules/users';
import { ProjectOverview as Presentational } from './ProjectOverview';

export const ProjectOverview: React.VFC = () => {
  const project = useSelector(selectProject);
  const owner = useSelector(selectOwner);
  const createUser = useSelector(selectUserCreateProject);

  return (
    <Presentational project={project} owner={owner} createUser={createUser} />
  );
};
