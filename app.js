// NPM Packages
const express = require('express')

// DataBase
require('./DB/mongoose')

// Routers
const urlRouter = require('./routes/routes')

// Setup
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(urlRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})