// import React, { useContext } from 'react'
// import { usercontext } from '../context/Usercontext'

// const Logout = () => {
//     const {user, setuser} = useContext(usercontext)

//     const logouthandle = (e) => {
//         e.preventDefault()

//         // erase token from localstorage
//         localStorage.removeItem('token')

//         // update user 
//         setuser('')
//     }

//   return (
//     <>
//         <button onClick={logouthandle}>Logout</button>
//     </>
//   )
// }

// export default Logout

import React, { useContext } from 'react';
import { usercontext } from '../context/Usercontext';

const Logout = () => {
  const { setuser } = useContext(usercontext);

  const logouthandle = (e) => {
    e.preventDefault();
    // erase token from localstorage
    localStorage.removeItem('token');
    // update user
    setuser('');
  };

  return (
    <button className="btn btn-danger" onClick={logouthandle}>
      Logout
    </button>
  );
};

export default Logout;
