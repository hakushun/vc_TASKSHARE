import React from 'react';
import { Activity } from '../../redux/modules/activity';
import { Userdata } from '../../redux/modules/users';
import { Confirmation } from '../Confirmation';
import { ActivityInfo } from '../_molecules/ActivityInfo';
import styles from './index.module.scss';

type Props = {
  activities: Activity[];
  user: Userdata;
  isLoading: boolean;
  handleEdit: (_id: string) => void;
  handleRemove: (_id: string) => void;
  openConfirmation: () => void;
};
export const ActivityList: React.VFC<Props> = ({
  activities,
  user,
  isLoading,
  handleEdit,
  handleRemove,
  openConfirmation,
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
                    <div className={styles.actionWrapper}>
                      <button
                        type="button"
                        className={styles.action}
                        onClick={() => handleEdit(activity.id!)}>
                        <img
                          src="/images/icon-edit.svg"
                          alt="編集する"
                          width="20"
                          height="20"
                        />
                      </button>
                      <button
                        type="button"
                        className={styles.action}
                        onClick={() => openConfirmation()}>
                        <img
                          src="/images/icon-trash.svg"
                          alt="削除する"
                          width="20"
                          height="20"
                        />
                      </button>
                    </div>
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
