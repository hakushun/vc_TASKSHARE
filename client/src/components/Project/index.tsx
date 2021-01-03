import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { selectActivitiesRelatedProject } from '../../redux/modules/activities';
import { add as addActivity } from '../../redux/modules/activity';
import { toggleConfirmation } from '../../redux/modules/modal';
import {
  edit as editProject,
  selectProject,
} from '../../redux/modules/project';
import { remove, selectIsLoading } from '../../redux/modules/projects';
import { add as addTask } from '../../redux/modules/task';
import { selectRelatedTasks } from '../../redux/modules/tasks';
import { selectUser } from '../../redux/modules/user';
import { PageLoader } from '../_atoms/PageLoader';
import { Project as Presentational } from './Project';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const project = useSelector(selectProject);
  const relatedTasks = useSelector(selectRelatedTasks);
  const relatedActivities = useSelector(selectActivitiesRelatedProject);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [loading, setLoading] = useState<boolean>(true);

  const handleEditProject = (id: string) => {
    dispatch(editProject({ id }));
  };
  const handleAddTask = (projectId: string) => {
    dispatch(addTask({ projectId, userId: user.id }));
  };
  const handleAddActivity = (projectId: string) => {
    dispatch(addActivity({ projectId, userId: user.id }));
  };
  const handleRemoveProject = (id: string) => {
    dispatch(remove({ id }));
  };
  const openConfirmation = () => {
    dispatch(toggleConfirmation(true));
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
          user={user}
          isLoading={isLoading}
          handleEditProject={handleEditProject}
          handleAddTask={handleAddTask}
          handleAddActivity={handleAddActivity}
          handleRemoveProject={handleRemoveProject}
          openConfirmation={openConfirmation}
        />
      )}
    </>
  );
};

export const Project = withAuth(Component);
