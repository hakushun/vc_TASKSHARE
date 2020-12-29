import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { removeUserCookie, setUserCookie } from '../libs/auth/userCookies';
import { mapAuthData, mapUserData } from '../libs/auth/mapUserData';
import { authUser, selectIsAuth } from '../redux/modules/user';
import { PageLoader } from '../components/PageLoader';
import { useFirestore } from '../libs/db/useFirestore';

export const withAuth = (Component: React.FC): React.FC => (
  props: any,
): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector(selectIsAuth);
  const { fetchUsers } = useFirestore();

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async (usr) => {
      if (usr) {
        fetchUsers();
        const userData = mapUserData(usr);
        dispatch(authUser(userData));
        const authData = await mapAuthData(usr);
        setUserCookie(authData);
      } else {
        removeUserCookie();
        dispatch(authUser(null));
        router.push('/');
      }
    });
    return () => {
      cancelAuthListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{!isAuth ? <PageLoader /> : <Component {...props} />}</>;
};
