import { TaskStatus } from '../task.entity';

export class UpdateTaskDto {
  id: string;
  projectId: string;
  title: string;
  assignTo: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
  userId: string;
  createdAt: number;
  updatedAt: number;
}
