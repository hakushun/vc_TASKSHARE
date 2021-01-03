import React from 'react';
import { Activity } from '../../redux/modules/activity';
import { Confirmation } from '../Confirmation';
import { ActivityHeader } from '../_molecules/ActivityHeader';
import styles from './index.module.scss';

type Props = {
  activities: Activity[];
  isLoading: boolean;
  handleRemove: (_id: string) => void;
};
export const ActivityList: React.VFC<Props> = ({
  activities,
  isLoading,
  handleRemove,
}) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {activities.length === 0 ? (
        <li className={styles.item}>
          <div className={styles.commentWrapper}>
            <p className={styles.empty}>No Activities</p>
          </div>
        </li>
      ) : (
        <>
          {activities.map((activity) => (
            <>
              <Confirmation
                isLoading={isLoading}
                id={activity.id!}
                handleRemove={handleRemove}
              />
              <li className={styles.item} key={activity.id}>
                <ActivityHeader
                  userId={activity.userId!}
                  updatedAt={activity.updatedAt!}
                  id={activity.id!}
                />
                <div className={styles.commentWrapper}>
                  <p className={styles.comment}>{activity.comment}</p>
                </div>
              </li>
            </>
          ))}
        </>
      )}
    </ul>
  </div>
);
