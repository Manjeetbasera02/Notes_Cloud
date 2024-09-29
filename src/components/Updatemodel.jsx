import React, { useState } from 'react'
import { useContext } from 'react'
import { usercontext } from '../context/Usercontext'

const Updatemodel = (props) => {
    // props = {note, closemodel, fetchnotes}
    const {user, setuser } = useContext(usercontext)
    const [data, setdata] = useState(props.note)

    const changehandler = (e) => {
        const {name, value} = e.target

        setdata((data)=> ( {...data, [name]: value} ))
    }

    const savehandler = async (e) => {
        e.preventDefault()

        console.log('save changing')

        console.log(data)
        
        // call addnote api
        const url = `http://localhost:3000/note/updatenote/${props.note._id}`

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

        await props.fetchnotes()

        props.closemodel()
    }

    const cancelhandler = (e) => {
        e.preventDefault()
        props.closemodel()
    }


    
    return (
        <>
            <form>
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
                    <button onClick={savehandler}> Save </button>
                </div>

                <div>
                    <button onClick={cancelhandler}> Cancel </button>
                </div>
            </form>
        </>
  )
}

export default Updatemodel