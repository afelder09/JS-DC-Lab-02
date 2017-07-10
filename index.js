// All our requires/dependencies
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')

// Connect to our Mongo database, using Mongoose and include our models
mongoose.connect('mongodb://admin:Password1$@cluster0-shard-00-00-32pjn.mongodb.net:27017,cluster0-shard-00-01-32pjn.mongodb.net:27017,cluster0-shard-00-02-32pjn.mongodb.net:27017/justnoise?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

//Require our models
const Artist = require('./models/Artist.js')
const Song = require('./models/Song.js')

// Require our "controllers" (i.e. routers)
const appRouter = require('./routes/index.js')
const artistRouter = require('./routes/artist.js')

//Creating our Application
const app = express()

//create dumby artist
// const myArtist = new Artist({
//   name: "Brand New",
//   imgURL: "/images/brandnewjpeg",
//   description: "Best band ever",
//   dateFormed: 12/12/2000
// })
//
// console.log(myArtist)
// myArtist.save()

// Registering and use our template engine (handlebars)
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Serving static files (like css)
app.use(express.static('public'))

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))

// Routes
// application routes (i.e. controller)
app.use('/', appRouter)
app.use('/artist', artistRouter)

// Listen on port 3000
app.listen( 3000, () => {

  console.log( 'listening on 3000' )

})
