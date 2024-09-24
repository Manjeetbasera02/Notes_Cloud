const express = require('express')
const router = express.Router()
// import user model
const User = require('../models/User')
// import body and validationResult from express-validator
const {body, validationResult} = require('express-validator')
// import bcrypt 
const bcrypt = require('bcryptjs')
// import jsonwebtoken
const jwt = require('jsonwebtoken')

// put for signup

router('/singup', async (req, res) => {
    // req.body has {name, email, password}
    const { name, email, password } = req.body

    try {

        // check email already present or not 
        const existemail = User.findOne({email})

        if(existemail) {
            return res.status(400).send({error: "user already exist"})
        }

        // hash password  using bcrypt and salt

        // generate salt 
        var salt = bcrypt.genSalt(10);

        var hash_password = bcrypt.hash(password, salt)

        // store name, email, hash_password in data base 

        const user = new User({name, email, password: hash_password})

        await user.save()

        res.status(201).send({message: "user created successfully"})
    }

    catch (error) {
        return res.status(401).send({error: `server error: $(error)`})
    }
})

// put for login 
router.put('/login', async (req, res) => {
    const { email, password } = req.body

    // check this user with this eamil exist or not 

    const user = User.findOne({email})

    if(!user) {
        return res.status(400).json({error: "user does not exist"})
    }

    // fetch the stored hash_password value for this email user 
    const hashed_password = user.password

    // verify password 

    const isMatch = await bcrypt.compare(password, hashed_password)

    if(!isMatch) {
        return res.status(401).json({error: "enter correct information"})
    }

    // generate jwt token 

})