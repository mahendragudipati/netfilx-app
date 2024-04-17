// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { UserAuth } from '../context/authcontext';

// const ProtectedRoute = ({ children }) => {
//     const {user} = UserAuth()

//   if (!user) {
//     return <Navigate to='/' />;
//   } else {
//     return children;
//   }
// };

// export default ProtectedRoute;


import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';



const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()


    if (!user) {
        return <Navigate to='/' />;
      } else {
        return children;
      }
    
}

export default ProtectedRoute;