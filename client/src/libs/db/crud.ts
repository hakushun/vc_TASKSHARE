import { getInstance } from './getInstance';
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
