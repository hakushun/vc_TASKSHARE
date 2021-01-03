import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { mapUserData } from '../libs/auth/mapUserData';
import { authUser, selectIsAuth } from '../redux/modules/user';
import { PageLoader } from '../components/PageLoader';
import { getInstance } from '../libs/db/getInstance';
import { getUsers, Userdata } from '../redux/modules/users';

export const withAuth = (Component: React.FC): React.FC => (
  props: any,
): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector(selectIsAuth);
  const db = getInstance();

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async (usr) => {
      if (usr) {
        const userData = mapUserData(usr);
        dispatch(authUser(userData));
      } else {
        dispatch(authUser(null));
        router.push('/');
      }
    });

    db.collection('users').onSnapshot((snapshot) => {
      const users: Userdata[] = [];
      snapshot.forEach((doc) => users.push(doc.data() as Userdata));
      dispatch(getUsers(users));
    });

    return () => {
      cancelAuthListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{!isAuth ? <PageLoader /> : <Component {...props} />}</>;
};
