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

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(data)
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