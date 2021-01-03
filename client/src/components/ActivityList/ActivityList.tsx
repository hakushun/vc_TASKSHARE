import React from 'react';
import { Activity } from '../../redux/modules/activity';
import { Userdata } from '../../redux/modules/users';
import { Confirmation } from '../Confirmation';
import { ActivityAction } from '../_molecules/ActivityAction';
import { ActivityInfo } from '../_molecules/ActivityInfo';
import styles from './index.module.scss';

type Props = {
  activities: Activity[];
  user: Userdata;
  isLoading: boolean;
  handleRemove: (_id: string) => void;
};
export const ActivityList: React.VFC<Props> = ({
  activities,
  user,
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
                <div className={styles.itemHeader}>
                  <ActivityInfo
                    userId={activity.userId!}
                    updatedAt={activity.updatedAt!}
                  />
                  {user.id === activity.userId && (
                    <ActivityAction id={activity.id!} />
                  )}
                </div>
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
