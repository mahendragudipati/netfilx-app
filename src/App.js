// // // import { Route, Routes } from "react-router-dom";
// // // import Navbar from "./components/navbar";
// // import { Route, BrowserRouter as Router } from "react-router-dom";
// // import Navbar from "./components/navbar";
// // import Home from "./pages/home";
// // import { AuthContextProvider } from "./context/authcontext";
// // import Login from "./pages/login";
// // import SignUp from "./pages/signup";
// // import Account from "./pages/Account";
// // // import Main from "./components/Main";



// // function App() {
// //   return (
// //     <>
// //     {/* <AuthContextProvider> */}
// //     <Navbar/>
// //     <Router>
// //      <Route path="/" element={<Home/>}/>
// //      <Route path="/login" element={<Login/>}/>
// //      <Route path="/signup" element={<SignUp/>}/>
// //      <Route path="/account" element={<Account/>}/>
// //    </Router>
  
// //    {/* </AuthContextProvider> */}
  
// //     </>
// //   );
// // }

// // export default App;

// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar';
// import { AuthContextProvider } from './context/authcontext';
// import Home from './pages/home';
// import Login from './pages/login';
// import Signup from './pages/signup';
// import Account from './pages/Account';
// import ProtectedRoute from './components/protectedRoute';

// function App() {
//   return (
//     <>
//       {/* <AuthContextProvider> */}
//       <Navbar />
//         <Routes>
        
//           <Route path='/' element={<Home />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/signup' element={<Signup />} />
//           {/* <Route
//             path='/account'
//             element={
//               <ProtectedRoute>
//                 <Account />
//               </ProtectedRoute>
//             }
//           /> */}
//         </Routes>
//       {/* </AuthContextProvider> */}
//     </>
//   );
// }

// export default App;



import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/home";
import { AuthContextProvider } from "./context/Authcontext";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Account from "./pages/Account";

import ProtectedRoute from "./components/protectedRoute";



function App() {
  return (
    <>
    
    <AuthContextProvider>
    <Navbar></Navbar>
    <Routes>

<Route path="/" element={<Home></Home>}/>
<Route path='/login' element={<Login></Login>} />
<Route path='/signup' element={<Signup></Signup>} />
<Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
</Routes>

    </AuthContextProvider>

    
    
    </>
  );
}

export default App;