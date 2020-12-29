import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';

const activities = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { token, id } = JSON.parse(req.cookies.auth);
  let activity = {};

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
        return res.status(200).json(activity);

      case 'PUT':
        console.log(req.body);

        activity = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };
        return res.status(200).json(activity);

      default:
        return res.status(200).json(activity);
    }
  } catch (error) {
    return res.status(403).json(error);
  }
};

export default activities;
