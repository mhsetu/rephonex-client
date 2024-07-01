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
import toast from 'react-hot-toast';

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [validUser, setValidUser] = useState([]);
  const [advertise, setAdvertise] = useState([]);
  const [cellPhones, setCellPhones] = useState([]);

  useEffect(() => {
    fetch(`https://rephonex-server.vercel.app/users?email=${user?.email}`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setValidUser(data));
    // setLoading(false);
  }, [user?.email]);

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
  });

  const handleAdvertise = (id) => {
    // const { _id } = value;

    fetch(`https://rephonex-server.vercel.app/phones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://rephonex-server.vercel.app/advertises`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success('Placed Advertisement Successfully');
            }
          });
        console.log(data);
      });
  };

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
    validUser,
    setValidUser,
    handleAdvertise,
    advertise,
    setAdvertise,
    cellPhones,
    setCellPhones,
  };
  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
