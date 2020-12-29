import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';
import { getInstance } from '../../../libs/db/getInstance';
import { Userdata } from '../../../redux/modules/users';

const users = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const db = getInstance();
  let user: Userdata;
  let target;

  switch (req.method) {
    case 'POST':
      user = {
        ...req.body,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      };

      // すでに登録済みであれば、DBへの登録はしないでreturn
      target = await db.collection('users').doc(user.id).get();
      if (target.exists) break;

      db.collection('users')
        .doc(user.id)
        .set({ ...user })
        .then(() => res.status(200).json({ ...user }))
        .catch((error) => res.status(500).json(error));
      break;

    case 'PUT':
      try {
        const { token } = JSON.parse(req.cookies.auth);
        await verifyIdToken(token);
        user = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };

        db.collection('users')
          .doc(user.id)
          .set({ ...user }, { merge: true })
          .then(() => res.status(200).json({ ...user }))
          .catch((error) => res.status(500).json(error));
        break;
      } catch (error) {
        res.status(403).json(error);
        break;
      }

    default:
      res.status(400);
      break;
  }
};

export default users;
