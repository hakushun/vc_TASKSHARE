import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectActivitiesRelatedProject } from '../../redux/modules/activities';
import { add as addActivity } from '../../redux/modules/activity';
import {
  edit as editProject,
  selectProject,
} from '../../redux/modules/project';
import { remove } from '../../redux/modules/projects';
import { add as addTask } from '../../redux/modules/task';
import { selectRelatedTasks } from '../../redux/modules/tasks';
import { selectOwner } from '../../redux/modules/users';
import { PageLoader } from '../PageLoader';
import { Project as Presentational } from './Project';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const project = useSelector(selectProject);
  const relatedTasks = useSelector(selectRelatedTasks);
  const relatedActivities = useSelector(selectActivitiesRelatedProject);
  const owner = useSelector(selectOwner);
  const [loading, setLoading] = useState<boolean>(true);

  const hadleEditProject = (id: string) => {
    dispatch(editProject({ id }));
  };
  const hadleAddTask = (projectId: string) => {
    dispatch(addTask({ projectId }));
  };
  const hadleAddActivity = (projectId: string) => {
    dispatch(addActivity({ projectId }));
  };
  const handleRemoveProject = (id: string) => {
    dispatch(remove({ id }));
  };
  useEffect(() => {
    if (!project.id) {
      router.push('/mypage');
      return;
    }
    setLoading(false);
  }, [router, project]);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <Presentational
          project={project}
          relatedTasks={relatedTasks}
          relatedActivities={relatedActivities}
          owner={owner}
          hadleEditProject={hadleEditProject}
          hadleAddTask={hadleAddTask}
          hadleAddActivity={hadleAddActivity}
          handleRemoveProject={handleRemoveProject}
        />
      )}
    </>
  );
};

export const Project = withAuth(Component);
