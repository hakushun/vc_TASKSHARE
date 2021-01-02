import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { logoutUser } from '../../redux/modules/user';
import { emitError } from '../../redux/modules/dialog';
import initFirebase from '../../libs/auth/initFirebase';
import { alertError } from './alertError';
import { create } from '../../redux/modules/users';

// TODO: 型修正
export const useAuth = (): any => {
  // Init the Firebase app.
  initFirebase();

  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signinWithGoogle = async () => {
    setIsLoading(true);
    try {
      const { user } = await firebase.auth().signInWithPopup(googleProvider);

      if (!user) return;

      dispatch(
        create({ id: user.uid, username: user.displayName || 'undefined' }),
      );

      router.push('/mypage');
      setIsLoading(false);
    } catch (error) {
      dispatch(emitError(alertError(error)));
      setIsLoading(false);
    }
  };

  const signup = async (value: {
    email: string;
    password: string;
  }): Promise<void> => {
    setIsLoading(true);
    const { email, password } = value;

    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (!user) return;

      dispatch(
        create({ id: user.uid, username: user.displayName || 'undefined' }),
      );

      router.push('/mypage');
      setIsLoading(false);
    } catch (error) {
      dispatch(emitError(alertError(error)));
      setIsLoading(false);
    }
  };

  const signin = async (value: {
    email: string;
    password: string;
  }): Promise<void> => {
    setIsLoading(true);
    const { email, password } = value;

    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (!user) return;

      router.push('/mypage');
      setIsLoading(false);
    } catch (error) {
      dispatch(emitError(alertError(error)));
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await firebase.auth().signOut();
      dispatch(logoutUser());
      router.push('/');
    } catch (error) {
      dispatch(emitError(alertError(error)));
    }
  };

  return { isLoading, signinWithGoogle, signup, signin, logout };
};
