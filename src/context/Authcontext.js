// // import { createContext, useContext, useEffect, useState } from 'react';
// // import { auth, db } from '../firebase';
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signOut,
// //   onAuthStateChanged,
// // } from 'firebase/auth';
// // import {setDoc,doc} from 'firebase/firestore'

// // const AuthContext = createContext();

// // export function AuthContextProvider({ children }) {
// //   const [user, setUser] = useState({});

// //   function signUp(email, password) {
// //     createUserWithEmailAndPassword(auth, email, password);
// //     setDoc(doc(db, 'users', email), {
// //         savedShows: []
// //     })
// //   }

// //   function logIn(email, password) {
// //     return signInWithEmailAndPassword(auth, email, password);
// //   }

// //   function logOut() {
// //     return signOut(auth);
// //   }

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => {
// //       unsubscribe();
// //     };
// //   });

// //   return (
// //     <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // export function UserAuth() {
// //   return useContext(AuthContext);
// // }



// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth, db } from '../firebase';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { setDoc, doc } from 'firebase/firestore';

// const AuthContext = createContext();

// export function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(null); // Initialize with null

//   async function signUp(email, password) {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       await setDoc(doc(db, 'users', email), {
//         savedShows: [],
//       });
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//       throw error;
//     }
//   }

//   async function logIn(email, password) {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error('Error logging in:', error.message);
//       throw error;
//     }
//   }

//   async function logOut() {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error('Error logging out:', error.message);
//       throw error;
//     }
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return unsubscribe; // Unsubscribe on cleanup
//   }, []); // Empty dependency array

//   return (
//     <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function UserAuth() {
//   return useContext(AuthContext);
// }




import { createContext, useContext, useEffect, useState } from 'react';
import { auth,db } from '../firebase';

import {
    createUserWithEmailAndPassword,
   
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
  import {setDoc,doc} from 'firebase/firestore'


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user,setuser]=useState({})

    function signUp(email, password) {
      
        createUserWithEmailAndPassword(auth, email, password);
setDoc(doc(db,'user',email),{
    savedShow:[]

})

    }


    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth)

    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged (auth,(currentuser)=>{

            setuser(currentuser)
        })
        return()=>{
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{signUp,logIn,logOut,user}} >
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)

}