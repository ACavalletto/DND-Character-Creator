//Dependencies
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const morgan = require('morgan')
const Character = require('./models/character.js')
const app = express()
const PORT = process.env.PORT

//DB Config
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
})

//DB Connection Error/Success
const db = mongoose.connection
db.on('error', err => console.log(`${err.message} is mongo running?`))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnect', () => console.log('mongo disconnected'))

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use("/public", express.static("public"));
app.use(methodOverride("_method"))
app.use(morgan('dev'))

//Routes / Controllers
const creationController = require('./controller/creation.js')
app.use('/creation', creationController)

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/character-sheet/:id', (req, res) => {
    Character.findById(req.params.id, (err, foundCharacter) => {
        res.render('characterSheet.ejs', {character: foundCharacter})
    })
})

//Listener
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})