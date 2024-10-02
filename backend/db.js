const { default: mongoose } = require('mongoose')
const monggose = require('mongoose')
const mongoURI = "FIERGFEJHBIPJHBOGY9HGOJGAEOGHIEhgeamgb"

const connectToMongo = async () => {
    await mongoose.connect("mongodb+srv://manjeetman38:Manjeet%4002@cluster0.ledge.mongodb.net/")
}

module.exports = connectToMongo