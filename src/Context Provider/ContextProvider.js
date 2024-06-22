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
  const [validUser, setValidUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setValidUser(data));
    // setLoading(true);
  }, [user?.email]);

  // console.log(validUser);

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
    setLoading,
    phones,
    setPhones,
    seller,
    setSeller,
    customer,
    setCustomer,
    validUser,
    setValidUser,
    // findEmail,
  };
  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
