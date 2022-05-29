const express = require('express')
const router = express.Router()
const Character = require('../models/character.js')

router.get('/race', (req, res) => {
    res.render('creation/race.ejs')
})

//Create Routes
router.post('/race', (req, res) => {
    Character.create(req.body, (err, createdCharacter) => {
        res.redirect(`/creation/${createdCharacter._id}/class`)
    })
})

router.put('/:id/class', (req, res) => {
    Character.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect(`/creation/${req.params.id}/background`)
    })
})
router.put('/:id/background', (req, res) => {
    Character.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect(`/creation/:id/equipment`)
    })
})

router.get('/:id/class', (req, res) => {
    res.render("creation/class.ejs", {id: req.params.id})
})
router.get('/:id/background', (req, res) => {
    res.render("creation/background.ejs", { id: req.params.id })
})
router.get('/:id/equipment', (req, res) => {
    res.send("equipment page")
})
module.exports = router