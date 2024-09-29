import React, { useState } from 'react'
import { useContext } from 'react'
import { usercontext } from '../context/Usercontext'

const Addnote = (props) => {
    const {user, setuser } = useContext(usercontext)
    const [data, setdata] = useState({
        title: "",
        description: "",
        tag: ""
    })

    const changehandler = (e) => {
        const {name, value} = e.target

        setdata((data)=> ( {...data, [name]: value} ))
    }

    const submithandler = async (e) => {
        e.preventDefault()

        console.log(data)
        
        // call addnote api
        const url = "http://localhost:3000/note/addnote"

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',  // Tell the server that the request body is JSON
                'token': user
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        console.log(json)

        props.fetchnotes()
    }

  return (
    <>
        <form onSubmit={submithandler}>
            {/* title description tag  Add button*/}
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' value={data.title} onChange={changehandler} />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id='description' name='description' value={data.description}  onChange={changehandler}/>
            </div>

            <div>
                <label htmlFor="tag">Tag</label>
                <input type="text" id='tag' name='tag' value={data.tag} onChange={changehandler} />
            </div>

            <div>
                <button type='submit'> Add Note </button>
            </div>
        </form>
    </>
  )
}

export default Addnote