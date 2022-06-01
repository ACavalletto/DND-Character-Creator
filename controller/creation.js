const express = require('express')
const router = express.Router()
const Character = require('../models/character.js')

router.get('/race', (req, res) => {
    res.render('creation/race.ejs')
})

//Create Routes
const raceController = require('./race.js')
router.use('/race', raceController)
const classController = require('./class.js')
router.use('/class', classController)

router.post('/race', (req, res) => {
    Character.create(req.body, (err, createdCharacter) => {
        res.redirect(`/creation/${createdCharacter._id}/class`)
    })
})

router.put('/:id/class', (req, res) => {
    console.log(req.params.id)
    Character.findByIdAndUpdate(req.params.id, req.body, (err, updatedCharacter) => {
        res.redirect(`/creation/${req.params.id}/background`)
    })
})
router.put('/:id/background', (req, res) => {
    Character.findByIdAndUpdate(req.params.id, { $push:req.body }, (err, updatedCharacter) => {
        res.redirect(`/creation/${req.params.id}/stats`, )
    })
})
router.put('/:id/stats', (req, res) => {
    let stats = req.body;
    Character.findByIdAndUpdate(req.params.id, { $set: { stats } }, (err, updatedCharacter) => {
        res.redirect(`/character-sheet/${req.params.id}`)
    })
})

router.get('/:id/class', (req, res) => {
    res.render("creation/class.ejs", {id: req.params.id})
})
router.get('/:id/background', (req, res) => {
    res.render("creation/background.ejs", { id: req.params.id })
})

router.get('/:id/stats', (req, res) => {
    res.render("creation/ability-scores.ejs", {id: req.params.id})
})
module.exports = router