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
  CreatePayload as CreateUser,
  RemovePayload as RemoveUser,
  UpdatePayload as UpdateUser,
} from '../redux/modules/users';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const postLogin = async (data: {
  id: string;
  email: string | null;
  token: string;
}): Promise<void> => {
  instance.post(`${baseUrl}/auth/login`, data);
};

export const postLogout = async (): Promise<void> => {
  instance.post(`${baseUrl}/auth/logout`);
};

export const postProject = async (data: CreateProject): Promise<void> =>
  instance.post(`${baseUrl}/projects`, data);

export const postTask = async (data: CreateTask): Promise<void> =>
  instance.post(`${baseUrl}/tasks`, data);

export const postActivity = async (data: CreateActivity): Promise<void> =>
  instance.post(`${baseUrl}/activities`, data);

export const postUser = async (data: CreateUser): Promise<void> =>
  instance.post(`${baseUrl}/users`, data);

export const putProject = async (data: UpdateProject): Promise<void> =>
  instance.put(`${baseUrl}/projects`, data);

export const putTask = async (data: UpdateTask): Promise<void> =>
  instance.put(`${baseUrl}/tasks`, data);

export const putActivity = async (data: UpdateActivity): Promise<void> =>
  instance.put(`${baseUrl}/activities`, data);

export const putUser = async (data: UpdateUser): Promise<void> =>
  instance.put(`${baseUrl}/users`, data);

export const deleteProject = async ({ id }: RemoveProject): Promise<void> =>
  instance.delete(`${baseUrl}/projects/${id}`);

export const deleteTask = async ({ id }: RemoveTask): Promise<void> =>
  instance.delete(`${baseUrl}/tasks/${id}`);

export const deleteActivity = async ({ id }: RemoveActivity): Promise<void> =>
  instance.delete(`${baseUrl}/activities/${id}`);

export const deleteUser = async ({ id }: RemoveUser): Promise<void> =>
  instance.delete(`${baseUrl}/users/${id}`);
