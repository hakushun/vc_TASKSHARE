import { Injectable } from '@nestjs/common';
import { AuthInfo } from 'src/auth/auth-type';
import * as admin from 'firebase-admin';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  async createTask(
    auth: AuthInfo,
    createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    const task = {
      ...createTaskDto,
      userId: auth.id,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    const docRef = await admin
      .firestore()
      .collection('tasks')
      .add({ ...task });
    await admin
      .firestore()
      .collection('tasks')
      .doc(docRef.id)
      .update({ id: docRef.id });
    return { ...task, id: docRef.id };
  }

  async updateTask(updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = {
      ...updateTaskDto,
      updatedAt: new Date().getTime(),
    };
    await admin
      .firestore()
      .collection('tasks')
      .doc(task.id)
      .set({ ...task }, { merge: true });
    return task;
  }
  // 関連するActivitiesも削除するロジック追加
  async deleteTask(id: string): Promise<{ id: string }> {
    await admin.firestore().collection('tasks').doc(id).delete();
    return { id };
  }
}
