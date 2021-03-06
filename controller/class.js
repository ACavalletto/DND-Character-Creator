const express = require('express')
const router = express.Router()
const Character = require('../models/character.js')

router.get('/:class/:id', (req, res) => {
    res.render(`class/${req.params.class}.ejs`, {id:req.params.id})
})

module.exports = router