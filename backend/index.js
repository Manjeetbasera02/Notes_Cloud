const express = require('express')
const app = express()
const connectToMongo = require('./db')
const cors = require('cors')

const notesRouter = require('./routes/notes')
const authRouter = require('./routes/auth')

const connected = connectToMongo()

if(connected) {
    console.log("connected to database")
}

else {
    console.log("something wrong with database connection")
}

// cors middleware to allow requests
app.use(cors())

// middleware to parse incoming json requests
app.use(express.json())

// mount the router on the /notes path
app.use('/note', notesRouter)

// mount the router on the /user path
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.send("testing")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});