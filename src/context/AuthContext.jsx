import { db, auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <AuthContext.Provider value={{ signUp, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
