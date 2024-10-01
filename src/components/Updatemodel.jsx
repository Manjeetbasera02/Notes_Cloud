// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { usercontext } from '../context/Usercontext'

// const Updatemodel = (props) => {
//     // props = {note, closemodel, fetchnotes}
//     const {user, setuser } = useContext(usercontext)
//     const [data, setdata] = useState(props.note)

//     const changehandler = (e) => {
//         const {name, value} = e.target

//         setdata((data)=> ( {...data, [name]: value} ))
//     }

//     const savehandler = async (e) => {
//         e.preventDefault()

//         console.log('save changing')

//         console.log(data)
        
//         // call addnote api
//         const url = `http://localhost:3000/note/updatenote/${props.note._id}`

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

//         await props.fetchnotes()

//         props.closemodel()
//     }

//     const cancelhandler = (e) => {
//         e.preventDefault()
//         props.closemodel()
//     }


    
//     return (
//         <>
//             <form>
//                 {/* title description tag  Add button*/}
//                 <div>
//                     <label htmlFor="title">Title</label>
//                     <input type="text" id='title' name='title' value={data.title} onChange={changehandler} />
//                 </div>
    
//                 <div>
//                     <label htmlFor="description">Description</label>
//                     <input type="text" id='description' name='description' value={data.description}  onChange={changehandler}/>
//                 </div>
    
//                 <div>
//                     <label htmlFor="tag">Tag</label>
//                     <input type="text" id='tag' name='tag' value={data.tag} onChange={changehandler} />
//                 </div>
    
//                 <div>
//                     <button onClick={savehandler}> Save </button>
//                 </div>

//                 <div>
//                     <button onClick={cancelhandler}> Cancel </button>
//                 </div>
//             </form>
//         </>
//   )
// }

// export default Updatemodel

import React, { useState, useContext } from 'react';
import { usercontext } from '../context/Usercontext';

const Updatemodel = (props) => {
  const { user } = useContext(usercontext);
  const [data, setdata] = useState(props.note);

  const changehandler = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const savehandler = async (e) => {
    e.preventDefault();

    const url = `http://localhost:3000/note/updatenote/${props.note._id}`;
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: user,
      },
      body: JSON.stringify(data),
    });

    props.fetchnotes();
    props.closemodel();
  };

  const cancelhandler = (e) => {
    e.preventDefault();
    props.closemodel();
  };

  return (
    <div className="modal show d-block" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Note</h5>
            <button type="button" className="close" aria-label="Close" onClick={props.closemodel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={data.title}
                  onChange={changehandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-control"
                  value={data.description}
                  onChange={changehandler}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tag">Tag</label>
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  className="form-control"
                  value={data.tag}
                  onChange={changehandler}
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelhandler}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" onClick={savehandler}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatemodel;
