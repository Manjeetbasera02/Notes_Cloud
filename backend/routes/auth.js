const express = require('express')
const router = express.Router()
// import user model
const User = require('../models/User')
// import body and validationResult from express-validator
const {body, validationResult} = require('express-validator')

// GET for login
router.get('/', 
    [
        // apply validation here 
        body('email', 'Enter a valid email').isEmail(),
        body('name', 'Enter a valid name').isLength({ min: 3}),
        body('password').isLength({ min: 5})
    ], (req, res) => {
        // send error is it is not valid
        const errors = validationResult(req)
        if(!errors.isEmpty) {
            return res.send(400).json({ errors: errors.array() })
        }
    // data is in req.body in object
    console.log(req.body)
    const user = new User(req.body)
    user.save()   // async nature , use await 
    res.send(req.body)
    res.send('logging in.......')
})

// PUT for logout
router.put('/', (req, res) => {
    res.send('logging out.......')
})

module.exports = router;