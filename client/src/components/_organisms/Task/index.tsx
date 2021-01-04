import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuth } from '../../../helpers/withAuth';
import { selectActivitiesRelatedTask } from '../../../redux/modules/activities';
import { add as addActivity } from '../../../redux/modules/activity';
import { selectStatusList } from '../../../redux/modules/dropdown';
import { toggleConfirmation } from '../../../redux/modules/modal';
import { focus, selectProjectByTask } from '../../../redux/modules/project';
import {
  add as addTask,
  edit as editTask,
  selectTask,
} from '../../../redux/modules/task';
import {
  remove,
  selectIsLoading,
  selectRelatedTasks,
} from '../../../redux/modules/tasks';
import { selectUser } from '../../../redux/modules/user';
import { PageLoader } from '../../_atoms/PageLoader';
import { Task as Presentational } from './Task';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isOpened = useSelector(selectStatusList);
  const project = useSelector(selectProjectByTask);
  const task = useSelector(selectTask);
  const relatedTasks = useSelector(selectRelatedTasks);
  const relatedActivities = useSelector(selectActivitiesRelatedTask);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [loading, setLoading] = useState<boolean>(true);

  const handleFocus = (id: string) => {
    dispatch(focus({ id }));
  };
  const handleAddTask = (projectId: string) => {
    dispatch(addTask({ projectId, userId: user.id }));
  };
  const handleEditTask = (id: string) => {
    dispatch(editTask({ id }));
  };
  const handleAddActivity = (taskId: string) => {
    dispatch(addActivity({ taskId, userId: user.id }));
  };
  const handleRemoveTask = (id: string) => {
    dispatch(remove({ id }));
  };
  const openConfirmation = () => {
    dispatch(toggleConfirmation(true));
  };

  useEffect(() => {
    if (!task.id) {
      router.push('/mypage');
      return;
    }
    setLoading(false);
  }, [router, task]);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <Presentational
          isOpened={isOpened}
          project={project}
          task={task}
          relatedTasks={relatedTasks}
          relatedActivities={relatedActivities}
          user={user}
          isLoading={isLoading}
          handleFocus={handleFocus}
          handleAddTask={handleAddTask}
          handleEditTask={handleEditTask}
          handleAddActivity={handleAddActivity}
          handleRemoveTask={handleRemoveTask}
          openConfirmation={openConfirmation}
        />
      )}
    </>
  );
};

export const Task = withAuth(Component);
