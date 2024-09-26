const { default: mongoose } = require('mongoose')
const monggose = require('mongoose')
const mongoURI = "FIERGFEJHBIPJHBOGY9HGOJGAEOGHIEhgeamgb"

const connectToMongo = async () => {
    await mongoose.connect("mongodb://localhost:27017/")
}

module.exports = connectToMongo