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

import React, { useState } from 'react';

function Login() {
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

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Tell the server that the request body is JSON
      },
      body: JSON.stringify(data)
    });

    const json = await response.json();

    console.log(json);

    // set token in local storage
    if (response.ok) {
      localStorage.setItem('token', json.token);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Enter Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
