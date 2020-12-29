import firebase from 'firebase/app';
import initFirebase from '../auth/initFirebase';

export const getInstance = (): firebase.firestore.Firestore => {
  initFirebase();
  const db = firebase.firestore();
  return db;
};
