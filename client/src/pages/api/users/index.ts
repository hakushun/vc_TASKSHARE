import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';

const users = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  let user = {};

  switch (req.method) {
    case 'POST':
      user = {
        ...req.body,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      };
      return res.status(200).json(user);

    case 'PUT':
      try {
        const { token } = JSON.parse(req.cookies.auth);
        await verifyIdToken(token);
        user = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };
        return res.status(200).json(user);
      } catch (error) {
        return res.status(403).json(error);
      }

    default:
      return res.status(200).json(user);
  }
};

export default users;
