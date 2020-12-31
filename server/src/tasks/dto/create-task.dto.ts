import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  projectId: string;
  title: string;
  assignTo: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
}
