import { Injectable } from '@nestjs/common';
import { AuthInfo } from 'src/auth/auth-type';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.entity';
import * as admin from 'firebase-admin';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  async createProject(
    auth: AuthInfo,
    createProjectDto: CreateProjectDto,
  ): Promise<Project> {
    const project = {
      ...createProjectDto,
      userId: auth.id,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    const docRef = await admin
      .firestore()
      .collection('projects')
      .add({ ...project });
    await admin
      .firestore()
      .collection('projects')
      .doc(docRef.id)
      .update({ id: docRef.id });
    return { ...project, id: docRef.id };
  }

  async updateProject(updateProjectDto: UpdateProjectDto): Promise<Project> {
    const project = {
      ...updateProjectDto,
      updatedAt: new Date().getTime(),
    };
    await admin
      .firestore()
      .collection('projects')
      .doc(project.id)
      .set({ ...project }, { merge: true });
    return project;
  }

  // 関連するTasksとActivitiesも削除するロジック追加
  async deleteProject(id: string): Promise<{ id: string }> {
    await admin.firestore().collection('projects').doc(id).delete();
    return { id };
  }
}
