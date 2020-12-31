import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as admin from 'firebase-admin';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // すでに登録済みであれば、DBへの登録はしないでreturn
    const target = await admin
      .firestore()
      .collection('users')
      .doc(createUserDto.id)
      .get();
    if (target.exists) return;

    const user = {
      ...createUserDto,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    await admin
      .firestore()
      .collection('users')
      .doc(createUserDto.id)
      .set({ ...user });
    return user;
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const user = {
      ...updateUserDto,
      updatedAt: new Date().getTime(),
    };
    await admin
      .firestore()
      .collection('users')
      .doc(user.id)
      .set({ ...user }, { merge: true });
    return user;
  }

  async deleteUser(id: string): Promise<{ id: string }> {
    await admin.firestore().collection('users').doc(id).delete();
    return { id };
  }
}
