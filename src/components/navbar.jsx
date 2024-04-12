// import React from 'react'
// import "./navbar.css"

// const Navbar = () => {
//   return (
//     <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
//       <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFILX</h1>
//       <div>
//         <button className='text-white pr-4'>Sign In</button>
//         <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar





import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/Authcontext';


const Navbar=()=>{
    const {user,logOut}=UserAuth()
    const navigate=useNavigate();
    const handlelogout=async ()=>{
        try{
            await logOut()
            navigate('/')

        }
        catch(error){
            console.log(error)
        
        }
    }
    // console.log(user)

    return(
        <div className="flex items-center  justify-between p-4 z-[100] w-full absolute">

<h1 className="text-red-700 text-4xl font-bold cursor-pointer">NETFLIX</h1>

       {user?.email? <div>
        <Link to='/account'>
        <button className="text-white pr-3">Account</button>
        </Link>
      
        <button onClick={handlelogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Logout</button>
        

        </div>:
        <div>
        <Link to='/login'>
        <button className="text-white pr-3">Sign In</button>
        </Link>
       <Link to='/signup'>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
        </Link>

        </div>
        }
        
        
        </div>

       
        
        
    )
}
export default Navbar;