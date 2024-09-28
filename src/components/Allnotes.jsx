import React, { useContext, useEffect, useState } from 'react'
import { usercontext } from '../context/Usercontext'
import Note from './Note'

const Allnotes = () => {
    const [notes, setnotes] = useState([])
    const { user, setuser } = useContext(usercontext)

    useEffect(() => {
        // async data fetching request
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

        fetchnotes();
    },[])

    console.log(notes)

    return (
        <>
            <h1>All Notes</h1>

            {
                notes.map((note, index) => (
                    <Note key={index} note={note}>note</Note>
                ))
            }
        </>
    )
}

export default Allnotes