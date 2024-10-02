// import React, { useState } from 'react'

// function Login() {
//     const [data, setdata] = useState({
//         email: "",
//         password: ""
//     })

//     const handlechange = (e) => {
//         const {name, value} = e.target

//         setdata((prevdata) => {
//             return {...prevdata, [name]: value}
//         })
//     }

//     const handlesubmit = async (e) => {
//         e.preventDefault()
//         console.log(data)

//         const url = "http://localhost:3000/auth/login"

//         const response = await fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',  // Tell the server that the request body is JSON
//             },
//             body: JSON.stringify(data)
//         })

//         const json = await response.json()

//         console.log(json)

//         // set token in local storage 

//         if(response.ok) {
//             localStorage.setItem('token', json.token)
//         }
        
//     }

//   return (
//     <>
//     <form onSubmit={handlesubmit}>
//         <div>
//             <label htmlFor="email">Email</label>
//             <input type="text" id='email' name='email' value={data.email} onChange={handlechange} />
//         </div>

//         <div>
//             <label htmlFor="">Password</label>
//             <input type="password" name='password' value={data.password} onChange={handlechange} />
//         </div>

//         <div>
//             <button type='submit'>Login</button>
//         </div>
//     </form>
//     </>
//   )
// }

// export default Login

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usercontext } from '../context/Usercontext';


function Login() {
  const {user, setuser} = useContext(usercontext)

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const url = 'http://localhost:3000/auth/login';

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
        toast.success('Login successful!');

        // delay to display toast message
        setTimeout(() => {
          localStorage.setItem('token', json.token);
          setuser(json.token)
        }, 1000)
      }

      else {
        toast.error('Invalid login credentials.');
      }
    } catch (error) {
      toast.error('Unable to connect to the server. Please try again later.');
    }

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg rounded">
            <h2 className="text-center mb-4">Welcome Back!</h2>
            <p className="text-center text-muted mb-4">Please log in to your account</p>
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email, e.g., john@example.com"
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
                  placeholder="Enter a secure password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                  Log In
                </button>
              </div>
            </form>

            {/* Link to Signup Page */}
            <div className="text-center mt-4">
              <p className="mb-0 text-muted">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary fw-bold">
                  Sign up here
                </Link>
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

export default Login;

