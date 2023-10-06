import React from "react";
import { createContext } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useState } from "react";
import auth from "./Firebase.config";
import { useEffect } from "react";

// set auth

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LogIn

  const logIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Register
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // state change

  useEffect(() => {
    const unScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("discribe change user");
    });
    return () => {
      unScribe();
    };
  }, []);

  // SignOut

  const logOut = () => {
    return signOut(auth);
  };

  // set popup massage
  const googlePopUp = () => {
    console.log("click");
  };

  const authInfo = {
    user,
    googlePopUp,
    logIn,
    SignIn,
    logOut,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
    </>
  );
};

export default AuthProvider;
