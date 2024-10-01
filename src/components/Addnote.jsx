// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { usercontext } from '../context/Usercontext'

// const Addnote = (props) => {
//     const {user, setuser } = useContext(usercontext)
//     const [data, setdata] = useState({
//         title: "",
//         description: "",
//         tag: ""
//     })

//     const changehandler = (e) => {
//         const {name, value} = e.target

//         setdata((data)=> ( {...data, [name]: value} ))
//     }

//     const submithandler = async (e) => {
//         e.preventDefault()

//         console.log(data)
        
//         // call addnote api
//         const url = "http://localhost:3000/note/addnote"

//         const response = await fetch(url, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',  // Tell the server that the request body is JSON
//                 'token': user
//             },
//             body: JSON.stringify(data)
//         })

//         const json = await response.json()

//         console.log(json)

//         props.fetchnotes()
//     }

//   return (
//     <>
//         <form onSubmit={submithandler}>
//             {/* title description tag  Add button*/}
//             <div>
//                 <label htmlFor="title">Title</label>
//                 <input type="text" id='title' name='title' value={data.title} onChange={changehandler} />
//             </div>

//             <div>
//                 <label htmlFor="description">Description</label>
//                 <input type="text" id='description' name='description' value={data.description}  onChange={changehandler}/>
//             </div>

//             <div>
//                 <label htmlFor="tag">Tag</label>
//                 <input type="text" id='tag' name='tag' value={data.tag} onChange={changehandler} />
//             </div>

//             <div>
//                 <button type='submit'> Add Note </button>
//             </div>
//         </form>
//     </>
//   )
// }

// export default Addnote

import React, { useState, useContext } from 'react';
import { usercontext } from '../context/Usercontext';

const Addnote = (props) => {
  const { user } = useContext(usercontext);
  const [data, setdata] = useState({
    title: '',
    description: '',
    tag: '',
  });

  const changehandler = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const submithandler = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:3000/note/addnote';

    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: user,
      },
      body: JSON.stringify(data),
    });

    props.fetchnotes();
    // Reset form after submission
    setdata({ title: '', description: '', tag: '' });
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">Add a New Note</h3>
      <form onSubmit={submithandler}>
        <div className="form-group mb-3">
          <label htmlFor="title" className="font-weight-bold">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={data.title}
            onChange={changehandler}
            placeholder="Enter the note title"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="description" className="font-weight-bold">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={data.description}
            onChange={changehandler}
            placeholder="Enter a detailed description"
            rows="2" // Reduced row height for compactness
            required
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="tag" className="font-weight-bold">Tag</label>
          <input
            type="text"
            id="tag"
            name="tag"
            className="form-control"
            value={data.tag}
            onChange={changehandler}
            placeholder="Enter tags (optional)"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addnote;
