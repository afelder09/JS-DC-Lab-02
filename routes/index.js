// Require express
const express = require('express')

// Require necessary models
const Artist = require('../models/Artist.js')

// Create the route
const appRouter = express.Router()

// Specify all the get, post, put, and delete requests
appRouter.get('/', ( req , res ) => {
  // index route
  // list every artist
  Artist.find({}, ( err, artists ) => {

    res.render('index', { artists: artists })

  })

})

//include in model
module.exports = appRouter
