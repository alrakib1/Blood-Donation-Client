import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const auth = getAuth(app)

const [loading,setLoading] = useState(true)
const [user,setUser] = useState(null);

// create a user
const signup = (email,password)=>{
    setLoading(true);
return   createUserWithEmailAndPassword(auth, email, password)
}

// login user

const login = (email,password)=>{
    setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
}

// log out user
const logout =()=>{
    setLoading(true)
 return   signOut(auth)
}


// get the current user 

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
     
      setUser(currentUser);
      setLoading(false);
  
    });
    return () => {
      unSubscribe();
    };
  }, []);

    const authInfo ={
 signup,
 loading,
 login,
 logout,
 user
    }

   return(
    <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
   )
};

export default AuthProvider;