const express = require('express')
const router = express.Router()
const Character = require('../models/character.js')

router.get('/race', (req, res) => {
    res.render('creation/race.ejs')
})

//Create Routes
router.post('/race', (req, res) => {
    Character.create(req.params.id, (err, createdCharacter) => {
        res.redirect(`/creation/${createdCharacter._id}/class`)
    })
})
router.post('/:id/class', (req, res) => {
    Character.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect(`/creation/:id/background`)
    })
})

router.get('/:id/class', (req, res) => {
    res.render("creation/class.ejs")
})
router.get('/:id/background', (req, res) => {
    res.send("background page")
})
module.exports = router