import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';
import { getInstance } from '../../../libs/db/getInstance';
import { Activity } from '../../../redux/modules/activity';

const activities = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const db = getInstance();

  const { token, id } = JSON.parse(req.cookies.auth);
  let activity: Activity;

  try {
    await verifyIdToken(token);
    switch (req.method) {
      case 'POST':
        activity = {
          ...req.body,
          userId: id,
          id: new Date().getTime().toString(),
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        };

        db.collection('activities')
          .add({ ...activity })
          .then((docRef) => {
            activity = {
              ...activity,
              id: docRef.id,
            };
            db.collection('activities')
              .doc(docRef.id)
              .update({
                id: docRef.id,
              })
              .then(() => {
                res.status(200).json(activity);
              })
              .catch((error) => {
                res.status(500).json(error);
              });
          })
          .catch((error) => {
            res.status(500).json(error);
          });
        break;

      case 'PUT':
        activity = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };

        db.collection('activities')
          .doc(activity.id)
          .set({ ...activity }, { merge: true })
          .then(() => res.status(200).json(activity))
          .catch((error) => res.status(500).json(error));
        break;

      default:
        res.status(400);
        break;
    }
  } catch (error) {
    res.status(403).json(error);
  }
};

export default activities;
