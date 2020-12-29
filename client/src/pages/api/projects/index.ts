import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIdToken } from '../../../libs/auth/firebaseAdmin';
import { getInstance } from '../../../libs/db/getInstance';
import { Project } from '../../../redux/modules/project';

const projects = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const db = getInstance();
  const { token, id } = JSON.parse(req.cookies.auth);
  let project: Project;

  try {
    await verifyIdToken(token);
    switch (req.method) {
      case 'POST':
        project = {
          ...req.body,
          userId: id,
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        };

        db.collection('projects')
          .add({ ...project })
          .then((docRef) => {
            project = {
              ...project,
              id: docRef.id,
            };
            db.collection('projects')
              .doc(docRef.id)
              .update({
                id: docRef.id,
              })
              .then(() => {
                res.status(200).json(project);
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
        project = {
          ...req.body,
          updatedAt: new Date().getTime(),
        };

        db.collection('projects')
          .doc(project.id)
          .set({ ...project }, { merge: true })
          .then(() => res.status(200).json(project))
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

export default projects;
