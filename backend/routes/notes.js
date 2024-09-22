const express = require('express');
const router = express.Router();

// GET route 
router.get('/', (req, res) => {
    res.send('fetching all notees.......')
});

// POST route 
router.post('/', (req, res) => {
    res.send('Adding a new note.......');
});

module.exports = router;