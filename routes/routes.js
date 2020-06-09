const express = require('express')
const randStr = require('randomstring')
const UrlHash = require('../DB/UrlHash')

const router = new express.Router()

router.post('/', async (req, res) => {
    const url = new UrlHash({
        url: req.body.url
    })

    try {
        if(req.body.hashedString) {
            url.hashedString = req.body.hashedString
        } else {
            url.hashedString = randStr.generate({
                length: 5,
                charset: 'hex'
            })
        }
        await url.save()
    } catch (err) {
        res.send(err)
    }
})

router.get('/:string', async (req, res) => {
    try {
        const url = await UrlHash.findOne({
            hashedString: req.params.string
        })
    
        if (url) {
            res.send(url.url)
        } else {
            res.send('No such url found')
        }
    } catch (error) {
        res.send(error)
    }
})

router.get('*', async (req, res) => {
    res.send('404')
})

module.exports = router