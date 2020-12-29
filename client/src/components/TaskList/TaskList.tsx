import Link from 'next/link';
import React from 'react';
import { getStaringDate } from '../../libs/date';
import { toStringStatus } from '../../libs/utils';
import { Task } from '../../redux/modules/task';
import { TaskListHeader } from '../TaskListHeader';
import styles from './index.module.scss';

type Props = {
  context: 'open' | 'close';
  tasks: Task[];
  handleFocus: (_taskId: string, _projectId: string) => void;
};
export const TaskList: React.VFC<Props> = ({ context, tasks, handleFocus }) => (
  <div className={styles.wrapper}>
    <TaskListHeader context={context} />
    <ul className={styles.list}>
      {tasks.length === 0 ? (
        <li className={styles.item}>
          <div className={styles.link}>
            <div className={styles.empty}>No Items</div>
          </div>
        </li>
      ) : (
        <>
          {tasks.map((task) => (
            <li className={styles.item} key={task.id}>
              <Link href={`/tasks/${task.id}`}>
                <a
                  id={`tasks_${task.id}`}
                  className={styles.link}
                  onClick={() => handleFocus(task.id!, task.projectId)}
                  onKeyPress={() => handleFocus(task.id!, task.projectId)}>
                  <div className={styles.status}>
                    {toStringStatus(task.status)}
                  </div>
                  <div className={styles.name}>{task.title}</div>
                  <div className={styles.duedate}>
                    {getStaringDate(task.dueDate)}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  </div>
);
