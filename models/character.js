const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  proficiencies: [{ type: String }],
  cantrips: [{ type: String }],
  racialFeature: [{ type: String }],
  classFeature: [{ type: String }],
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
