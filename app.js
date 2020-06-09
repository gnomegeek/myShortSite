const express = require('express')

require('./DB/mongoose')
const UrlHash = require('./DB/UrlHash')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const url = new UrlHash({
    url: 'www.google.com',
    hashedString: '123ah'
})
url.save()
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})