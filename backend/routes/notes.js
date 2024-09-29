const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')

// in each request method, need to verify token so call middleware

// get to fetch all notes 
router.get('/allnotes', fetchuser, async (req, res) => {
    // req.user has id because token is decode by middleware

    try {

        const { userId } = req.user

        const notes = await Note.find({user: userId})

        res.status(200).json({notes});
    }

    catch (error) {
        res.status(500).json({error: `Internal server error: ${error.message}`})
    }
})

// put to add note
router.put('/addnote', fetchuser, async (req, res) => {
    // title, description, tag in req.body and userId in req.user 

    try {
        const { userId } = req.user
        const { title, description, tag } = req.body

        const note = new Note({
            user: userId,
            title,
            description,
            tag
        })

        const savednote = await note.save()

        res.status(200).json({savednote})
    } 
    
    catch (error) {
        res.status(500).json({error: `Internal server error: {error.message}`})    
    }
})

// update a specific note 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    // note id in req.params and title, description, tag is in req.body

    const { title, description, tag } = req.body 

    try {
        const updatednote = await Note.findByIdAndUpdate(req.params.id, {title, description, tag}, {new: true})

        if(updatednote) {
            res.status(200).json({updatednote})
        }

        else {
            res.status(400).json({error: "not updated"})
        }
    } 
    
    catch (error) {
        res.status(500).json({error : `Imternal server error: ${error.message}`})
    }
})

// delete a specific note
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    // note id is in req.params

    try {
        const deletednote = await Note.findByIdAndDelete(req.params.id)

        if(deletednote) {
            res.status(200).json(deletednote)
        }

        else {
            res.status(400).json({error: "note not exist"})
        }
    } 
    
    catch (error) {
        res.status(500).json({error: `Internal server error: ${error.message}`})
    }
})

// delete all notes
router.delete('/deleteallnotes', fetchuser, async (req, res) => {
    // user_id in req.user

    try {
        const { userId } = req.user

        console.log(`hello ${userId}`)

        const deletedall = await Note.deleteMany({user: userId})

        console.log(deletedall)

        if(deletedall) {
            res.status(200).json({deletedall})
        }

        else {
            res.status(400).json({error: 'something wrong in deletion'})
        }
    } 
    
    catch (error) {
        res.status(500).json({error: `Internal server error: ${error.message}`})    
    }
})

module.exports = router;