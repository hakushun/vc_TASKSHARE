import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';
import { getInstance } from '../../../libs/db/getInstance';
import { Task } from '../../../redux/modules/task';

const tasks = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const db = getInstance();
  const { token, id } = JSON.parse(req.cookies.auth);
  let task: Task;

  try {
    await verifyIdToken(token);
    switch (req.method) {
      case 'POST':
        task = {
          ...req.body,
          userId: id,
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        };

        db.collection('tasks')
          .add({ ...task })
          .then((docRef) => {
            task = {
              ...task,
              id: docRef.id,
            };
            db.collection('tasks')
              .doc(docRef.id)
              .update({
                id: docRef.id,
              })
              .then(() => {
                res.status(200).json(task);
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
        task = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };

        db.collection('tasks')
          .doc(task.id)
          .set({ ...task }, { merge: true })
          .then(() => res.status(200).json(task))
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

export default tasks;
