import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [seller, setSeller] = useState('');
  const [customer, setCustomer] = useState('');

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  const SignUpEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileInfo = (name) => {
    return updateProfile(auth.currentUser, name);
  };

  const SignInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const Logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    SignUpEmail,
    SignInEmail,
    user,
    setUser,
    updateProfileInfo,
    Logout,
    googleSignIn,
    loading,
    phones,
    setPhones,
    seller,
    setSeller,
    customer,
    setCustomer,
  };
  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
