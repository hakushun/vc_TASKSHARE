export type TaskStatus = 'NEW' | 'IN_PROGRESS' | 'REVIEWING' | 'COMPLETE';

export class Task {
  id: string;
  projectId: string;
  title: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
  userId: string;
  assignTo: string;
  createdAt: number;
  updatedAt: number;
}
