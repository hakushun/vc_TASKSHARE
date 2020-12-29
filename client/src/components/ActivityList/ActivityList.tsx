import React from 'react';
import { getStaringTimestamp } from '../../libs/date';
import { Activity } from '../../redux/modules/activity';
import { getCommenter, Userdata } from '../../redux/modules/users';
import styles from './index.module.scss';

type Props = {
  activities: Activity[];
  users: Userdata[];
  handleEdit: (_id: string) => void;
  handleRemove: (_id: string) => void;
};
export const ActivityList: React.VFC<Props> = ({
  activities,
  users,
  handleEdit,
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
            <li className={styles.item} key={activity.id}>
              <div className={styles.itemHeader}>
                <div className={styles.info}>
                  <span className={styles.name}>
                    {getCommenter(users, activity.userId!)}
                  </span>
                  <span className={styles.date}>
                    {getStaringTimestamp(activity.updatedAt!)}
                  </span>
                </div>
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
                    onClick={() => handleRemove(activity.id!)}>
                    <img
                      src="/images/icon-trash.svg"
                      alt="削除する"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.commentWrapper}>
                <p className={styles.comment}>{activity.comment}</p>
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  </div>
);
