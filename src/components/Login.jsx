import React, { useState } from 'react'

function Login() {
    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const handlechange = (e) => {
        const {name, value} = e.target

        setdata((prevdata) => {
            return {...prevdata, [name]: value}
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(data)

        const url = "http://localhost:3000/auth/login"

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',  // Tell the server that the request body is JSON
            },
            body: JSON.stringify(data)
        })

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
            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email' value={data.email} onChange={handlechange} />
        </div>

        <div>
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={data.password} onChange={handlechange} />
        </div>

        <div>
            <button type='submit'>Login</button>
        </div>
    </form>
    </>
  )
}

export default Login