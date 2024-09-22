const express = require('express')
const router = express.Router()

// GET for login
router.get('/', (req, res) => {
    res.send('logging in.......')
})

// PUT for logout
router.put('/', (req, res) => {
    res.send('logging out.......')
})

module.exports = router;