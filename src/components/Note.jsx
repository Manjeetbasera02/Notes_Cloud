import React, { useContext, useState } from 'react'
import { usercontext } from '../context/Usercontext'
import Updatemodel from './Updatemodel'

const Note = (props) => {
    const { user, setuser } = useContext(usercontext)
    const [update, setupdate] = useState(false)

    const closemodel = () => {
        setupdate(false)
    }

    const openmodel = () => {
        setupdate(true)
    }

    const deletenote = async(id, fetchnotes) => {
        const url = `http://localhost:3000/note/deletenote/${id}`

        console.log(id)
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',  // Tell the server that the request body is JSON
                'token': user
            }
        })

        const json = await response.json()

        fetchnotes()
    }

    const updatenote = (id, fetchnotes) => {
        openmodel()
    }

  return (
    <>
    <div>
        <h1>Title: {props.note.title}</h1>
    </div>

    <div>
        <h1>Description: {props.note.description}</h1>
    </div>

    <div>
        <h1>Tag: {props.note.tag}</h1>
    </div>

    <div>
        <button onClick={() => deletenote(props.note._id, props.fetchnotes)}>Delete</button>
    </div>

    <div>
        <button onClick={() => updatenote(props.note._id, props.fetchnotes)}>Update</button>
    </div>

    {update && <Updatemodel closemodel={closemodel} note={props.note} fetchnotes={props.fetchnotes} />}
    </>
  )
}

export default Note