const jwt = require('jsonwebtoken')

const fetchuser = (req, res, next) => {
    try {
        const token = req.header('token')
        console.log(token)

        if(!token) {
            return res.status(400).json({message: "please authenticate using valid token"})
        }

        // verify and decode the token
        const data = jwt.verify(token, "secret_key")

        console.log(data)

        // store this data to re.user , payload format was = {userId: _id}

        req.user = data

        next()
    }

    catch (error) {
        res.status(500).json({error: `Internal server error : {error.message}`})
    }
}

module.exports = fetchuser