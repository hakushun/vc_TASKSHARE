import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';
import { getInstance } from '../../../libs/db/getInstance';

// 関連するTasksとActivitiesも削除するロジック追加

const projectId = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const db = getInstance();
  const { token } = JSON.parse(req.cookies.auth);
  const {
    query: { id },
  } = req;

  try {
    await verifyIdToken(token);
    switch (req.method) {
      case 'DELETE':
        typeof id === 'string' &&
          db
            .collection('projects')
            .doc(id)
            .delete()
            .then(() => res.status(200).json({ id }))
            .catch((error) => res.status(500).json(error));
        break;

      default:
        res.status(200).json({ id });
        break;
    }
  } catch (error) {
    res.status(403).json(error);
  }
};

export default projectId;
