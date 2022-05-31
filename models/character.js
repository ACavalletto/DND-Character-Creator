const mongoose = require("mongoose")
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: String,
    race: String,
    class: String,
    armorClass: Number,
    health: Number,
    age: Number,
    speed: Number,
    size: String,
    darkVision: String,
    resistance: [{ type: String }],
    savingThrow: String,
    languages: [{ type: String }],
    stats: {
        strength: String,
        dexterity: String,
        constitution: String,
        intelligence: String,
        wisdom: String,
        charisma: String,
    },
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