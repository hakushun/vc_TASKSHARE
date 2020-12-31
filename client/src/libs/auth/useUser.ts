import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { emitError } from '../../redux/modules/dialog';
import initFirebase from './initFirebase';
import { alertError } from './alertError';
import { remove, update, Userdata } from '../../redux/modules/users';
import { postLogout } from '../axios';

// TODO: 型修正
export const useUser = (): any => {
  // Init the Firebase app.
  initFirebase();

  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateUsername = async (userdata: Userdata) => {
    setIsLoading(true);
    const user = firebase.auth().currentUser;

    if (!user) {
      setIsLoading(false);
      return;
    }
    try {
      await user.updateProfile({ displayName: userdata.username });
      dispatch(update({ ...userdata }));
      setIsLoading(false);
    } catch (error) {
      dispatch(emitError(alertError(error)));
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    await firebase.auth().sendPasswordResetEmail(email);
    setIsLoading(false);
  };

  const deleteUser = async (value: { email: string; password: string }) => {
    setIsLoading(true);
    const user = firebase.auth().currentUser;

    if (!user) {
      setIsLoading(false);
      return;
    }
    try {
      const { email, password } = value;
      const credential = firebase.auth.EmailAuthProvider.credential(
        email,
        password,
      );
      if (!credential) return;
      await user.reauthenticateWithCredential(credential);
      dispatch(remove({ id: user.uid }));
      await user.delete();
      router.push('/');
      await postLogout();
      setIsLoading(false);
    } catch (error) {
      dispatch(emitError(alertError(error)));
      setIsLoading(false);
    }
  };

  return { isLoading, updateUsername, resetPassword, deleteUser };
};
