import { TaskStatus } from '../redux/modules/task';

export const toStringStatus = (status: TaskStatus): string => {
  switch (status) {
    case 'NEW':
      return 'New';
    case 'IN_PROGRESS':
      return 'WIP';
    case 'REVIEWING':
      return 'Reviewing';
    case 'COMPLETE':
      return 'Complete';
    default:
      return '未着手';
  }
};
