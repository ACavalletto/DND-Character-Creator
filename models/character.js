const mongoose = require("mongoose")
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: String,
    race: String,
    class: String, 
    armorClass: Number,
    health: Number,
    abilityScores: {
        strength: Number,
        dexterity: Number,
        constitution: Number,
        wisdom: Number,
        intelligence: Number,
        charisma: Number,
    },
    background: String,
    proficiencies: {
        athletics: Boolean,
        acrobatics: Boolean,
        sleightOfHand: Boolean,
        stealth: Boolean,
        arcana: Boolean,
        history: Boolean,
        investigation: Boolean,
        nature: Boolean,
        religion: Boolean,
        animalHandling: Boolean,
        insight: Boolean,
        medicine: Boolean,
        perception: Boolean,
        survival: Boolean,
        deception: Boolean,
        intimidation: Boolean,
        performance: Boolean,
        persuasion: Boolean,
    },


})

const Character = mongoose.model("Character", characterSchema)

module.exports = Character