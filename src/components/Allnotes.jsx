// import React, { useContext, useEffect, useState } from 'react'
// import { usercontext } from '../context/Usercontext'
// import Note from './Note'
// import Addnote from './Addnote'

// const Allnotes = () => {
//     const [notes, setnotes] = useState([])
//     const { user, setuser } = useContext(usercontext)

//     const fetchnotes = async () => {
//         const url = "http://localhost:3000/note/allnotes"

//         const data = await fetch(url,{
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',  // Tell the server that the request body is JSON
//                 'token': user
//             }
//         })

//         console.log(data)

//         const json = await data.json()

//         console.log(json)

//         // json = {notes: []}

//         setnotes(json.notes)
//     }

//     const deleteallnotes = async() => {
//         console.log('deleteall')
//         const url = "http://localhost:3000/note/deleteallnotes"

//         const response = await fetch(url, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',  // Tell the server that the request body is JSON
//                 'token': user
//             },
//         })

//         const json = await response.json()

//         console.log(json)

//         fetchnotes()

//     }

//     // useeffect only for first time rendering

//     useEffect(() => {
//         fetchnotes();
//     },[])

//     console.log(notes)

//     return (
//         <>
//             <h1>All Notes</h1>

//             {
//                 notes.map((note, index) => (
//                     <Note key={index} note={note} fetchnotes={fetchnotes}>note</Note>
//                 ))
//             }

//             <Addnote fetchnotes={fetchnotes} />

//             <h1>
//                 <button onClick={() => deleteallnotes()}>Delete All</button>
//             </h1>
//         </>
//     )
// }

// export default Allnotes

import React, { useContext, useEffect, useState } from 'react';
import { usercontext } from '../context/Usercontext';
import Note from './Note';
import Addnote from './Addnote';

const Allnotes = () => {
  const [notes, setnotes] = useState([]);
  const { user } = useContext(usercontext);

  const fetchnotes = async () => {
    const url = 'http://localhost:3000/note/allnotes';

    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: user,
      },
    });

    const json = await data.json();
    setnotes(json.notes);
  };

  const deleteallnotes = async () => {
    const url = 'http://localhost:3000/note/deleteallnotes';

    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        token: user,
      },
    });

    fetchnotes();
  };

  useEffect(() => {
    fetchnotes();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">All Notes</h1>

      <div className="row">
        {notes.map((note, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Note note={note} fetchnotes={fetchnotes} />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Addnote fetchnotes={fetchnotes} />
        <button className="btn btn-danger mt-3" onClick={deleteallnotes}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Allnotes;
