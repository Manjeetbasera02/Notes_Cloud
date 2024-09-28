import { setDriver } from 'mongoose'
import React from 'react'
import { useState } from 'react'

function Signup() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handlechange = (e) => {
    const {name, value} = e.target
    setdata((prevdata) => {
      // use dynamic key [name]
      return {...prevdata, [name]: value}
    })
  }

  const handlesubmit = async(e) => {
    e.preventDefault()
    console.log('form submitted', data)

    const url = "http://localhost:3000/auth/signup"

    const response = await fetch(url, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',  // Tell the server that the request body is JSON
      },

      body: JSON.stringify(data)
    });

    const json = await response.json()

    console.log(json)

    // set token in local storage 

    if(response.ok) {
      localStorage.setItem('token', json.token)
    }

  }
  
  return (
    <>

    <form onSubmit={handlesubmit}>
      <div>
        <label htmlFor="username">Name</label>
        <input type="text" id='username' name='name' value={data.name} onChange={handlechange} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' name='email' value={data.email} onChange={handlechange}/>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' value={data.password} onChange={handlechange}/>
      </div>

      <div>
        <button type='submit' >Signup</button>
      </div>
    </form>

    </>
  )
}

export default Signup