import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';

const userId = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { token } = JSON.parse(req.cookies.auth);
  const {
    query: { id },
  } = req;

  try {
    await verifyIdToken(token);
    switch (req.method) {
      case 'DELETE':
        return res.status(200).json({ id });

      default:
        return res.status(200).json({ id });
    }
  } catch (error) {
    return res.status(403).json(error);
  }
};

export default userId;
