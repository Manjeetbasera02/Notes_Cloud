import React from 'react'

const Note = (props) => {
    const deletehandler = (id) => {
        console.log(id)
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
        <button onClick={() => deletehandler(props.note._id)}>Delete</button>
    </div>
    </>
  )
}

export default Note