const express = require('express')
const app = express()
const connectToMongo = require('./db')

connectToMongo()

const notesRouter = require('./routes/notes')
const authRouter = require('./routes/auth')

// middleware to parse incoming json requests
app.use(express.json())

// mount the router on the /notes path
app.use('/notes', notesRouter)

// mount the router on the /user path
app.use('/user', authRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port $(PORT)`);
});