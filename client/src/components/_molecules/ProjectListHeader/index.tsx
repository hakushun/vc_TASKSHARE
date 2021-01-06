import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjectsSort, sortProjects } from '../../../redux/modules/sort';
import { ProjectListHeader as Presentational } from './ProjectListHeader';

type Props = {
  context: 'open' | 'close';
};
export const ProjectListHeader: React.VFC<Props> = ({ context }) => {
  const dispatch = useDispatch();
  const projectsSort = useSelector(selectProjectsSort);

  const handleSrotProjects = (key: 'owner' | 'progress') => {
    const order = projectsSort.order === 'up' ? 'down' : 'up';
    dispatch(sortProjects({ key, order }));
  };
  return (
    <Presentational
      context={context}
      projectsSort={projectsSort}
      handleSrotProjects={handleSrotProjects}
    />
  );
};
