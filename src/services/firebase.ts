import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCKH5PYFZvZkldMDtjCtgQ65w-mV1PmVDE',
  authDomain: 'react-08-22-bb9a4.firebaseapp.com',
  databaseURL:
    'https://react-08-22-bb9a4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-08-22-bb9a4',
  storageBucket: 'react-08-22-bb9a4.appspot.com',
  messagingSenderId: '391635868449',
  appId: '1:391635868449:web:1c5a36883ce08247bfbc60',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');
