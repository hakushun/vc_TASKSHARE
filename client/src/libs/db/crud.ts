import { getInstance } from './getInstance';
import {
  CreatePayload as CreateProject,
  RemovePayload as RemoveProject,
  UpdatePayload as UpdateProject,
} from '../../redux/modules/projects';
import {
  CreatePayload as CreateUser,
  RemovePayload as RemoveUser,
  UpdatePayload as UpdateUser,
} from '../../redux/modules/users';

const db = getInstance();

// CRUD Users
export const postUser = async (data: CreateUser): Promise<void> => {
  // すでに登録済みであれば、DBへの登録はしないでreturn
  const target = await db.collection('users').doc(data.id).get();
  if (target.exists) return;

  const user = {
    ...data,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  };
  await db
    .collection('users')
    .doc(data.id)
    .set({ ...user });
};

export const putUser = async (data: UpdateUser): Promise<void> => {
  const user = {
    ...data,
    updatedAt: new Date().getTime(),
  };
  await db
    .collection('users')
    .doc(user.id)
    .set({ ...user }, { merge: true });
};

export const deleteUser = async (data: RemoveUser): Promise<void> => {
  await db.collection('users').doc(data.id).delete();
};
// CRUD Projects
export const postProject = async (data: CreateProject): Promise<void> => {
  const project = {
    ...data,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  };
  const docRef = await db.collection('projects').add({ ...project });
  await db.collection('projects').doc(docRef.id).update({ id: docRef.id });
};
export const putProject = async (data: UpdateProject): Promise<void> => {
  const project = {
    ...data,
    updatedAt: new Date().getTime(),
  };
  await db
    .collection('projects')
    .doc(project.id)
    .set({ ...project }, { merge: true });
};
export const deleteProject = async (data: RemoveProject): Promise<void> => {
  await db.collection('projects').doc(data.id).delete();
};
