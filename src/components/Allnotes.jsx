import React, { useContext, useEffect, useState } from 'react'
import { usercontext } from '../context/Usercontext'
import Note from './Note'
import Addnote from './Addnote'

const Allnotes = () => {
    const [notes, setnotes] = useState([])
    const { user, setuser } = useContext(usercontext)

    const fetchnotes = async () => {
        const url = "http://localhost:3000/note/allnotes"

        const data = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',  // Tell the server that the request body is JSON
                'token': user
            }
        })

        console.log(data)

        const json = await data.json()

        console.log(json)

        // json = {notes: []}

        setnotes(json.notes)
    }

    const deleteallnotes = async() => {
        console.log('deleteall')
        const url = "http://localhost:3000/note/deleteallnotes"

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',  // Tell the server that the request body is JSON
                'token': user
            },
        })

        const json = await response.json()

        console.log(json)

        fetchnotes()

    }

    // useeffect only for first time rendering

    useEffect(() => {
        fetchnotes();
    },[])

    console.log(notes)

    return (
        <>
            <h1>All Notes</h1>

            {
                notes.map((note, index) => (
                    <Note key={index} note={note} fetchnotes={fetchnotes}>note</Note>
                ))
            }

            <Addnote fetchnotes={fetchnotes} />

            <h1>
                <button onClick={() => deleteallnotes()}>Delete All</button>
            </h1>
        </>
    )
}

export default Allnotes