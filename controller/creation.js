const express = require('express')
const router = express.Router()
const Character = require('../models/character.js')

router.get('/race', (req, res) => {
    res.render('creation/race.ejs')
})

module.exports = router