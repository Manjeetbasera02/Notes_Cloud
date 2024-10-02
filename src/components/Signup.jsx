// import { setDriver } from 'mongoose'
// import React from 'react'
// import { useState } from 'react'

// function Signup() {
//   const [data, setdata] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const handlechange = (e) => {
//     const {name, value} = e.target
//     setdata((prevdata) => {
//       // use dynamic key [name]
//       return {...prevdata, [name]: value}
//     })
//   }

//   const handlesubmit = async(e) => {
//     e.preventDefault()
//     console.log('form submitted', data)

//     const url = "http://localhost:3000/auth/signup"

//     const response = await fetch(url, {
//       method: 'PUT',

//       headers: {
//         'Content-Type': 'application/json',  // Tell the server that the request body is JSON
//       },

//       body: JSON.stringify(data)
//     });

//     const json = await response.json()

//     console.log(json)

//     // set token in local storage 

//     if(response.ok) {
//       localStorage.setItem('token', json.token)
//     }

//   }
  
//   return (
//     <>

//     <form onSubmit={handlesubmit}>
//       <div>
//         <label htmlFor="username">Name</label>
//         <input type="text" id='username' name='name' value={data.name} onChange={handlechange} />
//       </div>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input type="text" id='email' name='email' value={data.email} onChange={handlechange}/>
//       </div>

//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" id='password' name='password' value={data.password} onChange={handlechange}/>
//       </div>

//       <div>
//         <button type='submit' >Signup</button>
//       </div>
//     </form>

//     </>
//   )
// }

// export default Signup

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import { usercontext } from '../context/Usercontext';

function Signup() {
  const {user, setuser} = useContext(usercontext)

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', data);

    const url = 'http://localhost:3000/auth/signup';

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' // Tell the server that the request body is JSON
        },
        body: JSON.stringify(data)
      });

      const json = await response.json();
      console.log(json);

      // Set token in local storage
      
      if (response.ok) {
        toast.success('Account created successfully!');

        // delay to display toast message

        setTimeout(() => {
          localStorage.setItem('token', json.token);
          setuser(json.token)
        }, 1000)
      }

      else {
        toast.error('Signup failed! Please try again.');
      }
    }

    catch (error) {
      toast.error('Unable to connect to the server. Please try again later.');
    }

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group mb-3">
                <label htmlFor="username" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="username"
                  name="name"
                  className="form-control"
                  placeholder="John Doe"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="example@domain.com"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-success w-100">Sign Up</button>
              </div>
            </form>

            {/* Link to Login Page */}
            <div className="text-center mt-3">
              <p className="mb-0">
                Already have an account?{' '}
                <Link to="/login" className="text-primary">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container for displaying toast notifications */}
      <ToastContainer />

  </div>
  );
}

export default Signup;

