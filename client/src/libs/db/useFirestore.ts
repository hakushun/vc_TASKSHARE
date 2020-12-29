import { useDispatch } from 'react-redux';
import { getActivities } from '../../redux/modules/activities';
import { Activity } from '../../redux/modules/activity';
import { emitError } from '../../redux/modules/dialog';
import { Project } from '../../redux/modules/project';
import { getProjects } from '../../redux/modules/projects';
import { Task } from '../../redux/modules/task';
import { getTasks } from '../../redux/modules/tasks';
import { Userdata, getUsers } from '../../redux/modules/users';
import { alertError } from '../auth/alertError';
import { getInstance } from './getInstance';

export const useFirestore = (): any => {
  const dispatch = useDispatch();

  const db = getInstance();

  const fetchUsers = () => {
    db.collection('users')
      .get()
      .then((docs) => {
        const users: Userdata[] = [];
        docs.forEach((doc) => {
          users.push(doc.data() as Userdata);
        });
        dispatch(getUsers(users));
      })
      .catch((error) => {
        dispatch(emitError(alertError(error)));
      });
  };

  const fetchProjects = () => {
    db.collection('projects')
      .get()
      .then((docs) => {
        const projects: Project[] = [];
        docs.forEach((doc) => {
          projects.push(doc.data() as Project);
        });
        dispatch(getProjects(projects));
      })
      .catch((error) => {
        dispatch(emitError(alertError(error)));
      });
  };

  const fetchTasks = () => {
    db.collection('tasks')
      .get()
      .then((docs) => {
        const tasks: Task[] = [];
        docs.forEach((doc) => {
          tasks.push(doc.data() as Task);
        });
        dispatch(getTasks(tasks));
      })
      .catch((error) => {
        dispatch(emitError(alertError(error)));
      });
  };

  const fetchActivities = () => {
    db.collection('activities')
      .get()
      .then((docs) => {
        const activities: Activity[] = [];
        docs.forEach((doc) => {
          activities.push(doc.data() as Activity);
        });
        dispatch(getActivities(activities));
      })
      .catch((error) => {
        dispatch(emitError(alertError(error)));
      });
  };

  return { fetchUsers, fetchProjects, fetchTasks, fetchActivities };
};
