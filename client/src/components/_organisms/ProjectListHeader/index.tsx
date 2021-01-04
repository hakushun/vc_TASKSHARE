import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProjectsSortKey,
  sortProjects,
} from '../../../redux/modules/sort';
import { ProjectListHeader as Presentational } from './ProjectListHeader';

type Props = {
  context: 'open' | 'close';
};
export const ProjectListHeader: React.VFC<Props> = ({ context }) => {
  const dispatch = useDispatch();
  const projectsSortKey = useSelector(selectProjectsSortKey);

  const handleSrotProjects = (key: 'progress' | 'openTask') => {
    const value = projectsSortKey[key] === 'up' ? 'down' : 'up';
    dispatch(sortProjects({ [key]: value }));
  };
  return (
    <Presentational
      context={context}
      projectsSortKey={projectsSortKey}
      handleSrotProjects={handleSrotProjects}
    />
  );
};
