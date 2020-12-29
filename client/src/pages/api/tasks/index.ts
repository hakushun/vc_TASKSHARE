import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';

const tasks = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { token, id } = JSON.parse(req.cookies.auth);
  let task = {};

  try {
    await verifyIdToken(token);
    switch (req.method) {
      case 'POST':
        task = {
          ...req.body,
          userId: id,
          id: new Date().getTime().toString(),
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        };
        return res.status(200).json(task);

      case 'PUT':
        task = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };
        return res.status(200).json(task);

      default:
        return res.status(200).json(task);
    }
  } catch (error) {
    return res.status(403).json(error);
  }
};

export default tasks;
