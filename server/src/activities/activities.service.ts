import { AuthInfo } from 'src/auth/auth-type';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { CreateActivityDto } from './dto/create-activity.dto';
import { Activity } from './activity.entity';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {
  async createActivity(
    auth: AuthInfo,
    createActivityDto: CreateActivityDto,
  ): Promise<Activity> {
    const activity = {
      ...createActivityDto,
      userId: auth.id,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    const docRef = await admin
      .firestore()
      .collection('activities')
      .add({ ...activity });
    await admin
      .firestore()
      .collection('activities')
      .doc(docRef.id)
      .update({ id: docRef.id });
    return { ...activity, id: docRef.id };
  }

  async updateActivity(
    updateActivityDto: UpdateActivityDto,
  ): Promise<Activity> {
    const activity = {
      ...updateActivityDto,
      updatedAt: new Date().getTime(),
    };
    await admin
      .firestore()
      .collection('activities')
      .doc(activity.id)
      .set({ ...activity }, { merge: true });
    return activity;
  }

  async deleteActivity(id: string): Promise<{ id: string }> {
    await admin.firestore().collection('activities').doc(id).delete();
    return { id };
  }
}
