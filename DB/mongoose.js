const mongoose = require('mongoose')
require('dotenv').config() 

const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

const url = `mongodb+srv://${userName}:${password}@cluster0-ea6fe.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(
    url, 
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
