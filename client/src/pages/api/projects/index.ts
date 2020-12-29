import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';

const projects = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { token, id } = JSON.parse(req.cookies.auth);
  let project = {};

  try {
    await verifyIdToken(token);
    switch (req.method) {
      case 'POST':
        project = {
          ...req.body,
          userId: id,
          id: new Date().getTime().toString(),
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        };
        return res.status(200).json(project);

      case 'PUT':
        project = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };
        return res.status(200).json(project);

      default:
        return res.status(200).json(project);
    }
  } catch (error) {
    return res.status(403).json(error);
  }
};

export default projects;
