export class UpdateActivityDto {
  id: string;
  projectId?: string;
  taskId?: string;
  comment: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
}
