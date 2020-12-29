import axios from 'axios';
import {
  CreatePayload as CreateActivity,
  RemovePayload as RemoveActivity,
  UpdatePayload as UpdateActivity,
} from '../redux/modules/activities';
import {
  CreatePayload as CreateProject,
  RemovePayload as RemoveProject,
  UpdatePayload as UpdateProject,
} from '../redux/modules/projects';
import {
  CreatePayload as CreateTask,
  RemovePayload as RemoveTask,
  UpdatePayload as UpdateTask,
} from '../redux/modules/tasks';
import {
  RemovePayload as RemoveUser,
  UserPayload,
} from '../redux/modules/users';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const postProject = async (data: CreateProject): Promise<void> =>
  instance.post('/api/projects', data);

export const postTask = async (data: CreateTask): Promise<void> =>
  instance.post('/api/tasks', data);

export const postActivity = async (data: CreateActivity): Promise<void> =>
  instance.post('/api/activities', data);

export const postUser = async (data: UserPayload): Promise<void> =>
  instance.post('/api/users', data);

export const putProject = async (data: UpdateProject): Promise<void> =>
  instance.put('/api/projects', data);

export const putTask = async (data: UpdateTask): Promise<void> =>
  instance.put('/api/tasks', data);

export const putActivity = async (data: UpdateActivity): Promise<void> =>
  instance.put('/api/activities', data);

export const putUser = async (data: UserPayload): Promise<void> =>
  instance.put('/api/users', data);

export const deleteProject = async ({ id }: RemoveProject): Promise<void> =>
  instance.delete(`/api/projects/${id}`);

export const deleteTask = async ({ id }: RemoveTask): Promise<void> =>
  instance.delete(`/api/tasks/${id}`);

export const deleteActivity = async ({ id }: RemoveActivity): Promise<void> =>
  instance.delete(`/api/activities/${id}`);

export const deleteUser = async ({ id }: RemoveUser): Promise<void> =>
  instance.delete(`/api/users/${id}`);
