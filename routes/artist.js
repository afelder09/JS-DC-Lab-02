// Require express
const express = require('express')

// Require all necessary models
const Artist = require('../models/Artist.js')

// Create router
const artistRouter = express.Router()

// Route to new page
artistRouter.get('/new', ( req, res ) => {
    // new view
    // render template for creating a new article
    res.render('artist/new')
})

// Post infomration in new page to db, reroute to index
artistRouter.post('/new', ( req, res ) => {
   const newArtist = new Artist({
     name: req.body.name,
     description: req.body.description,
     dateFormed: req.body.date,
     imageURL: req.body.imageURL
   })

  console.log("Artist post being called")
  newArtist.save()
  res.redirect('/')
})

artistRouter.get('/:id', ( req, res ) => {
  console.log("Artist get")
  Artist.findById({'_id': req.params.id }, ( err, artist ) => {
    res.render( 'artist/show', { artist: artist  } )
  })
})

// artistRouter.post('/:id', ( req, res ) => {
//
//   Artist.findById( req.params.id, ( err, artist ) => {
//
//     Artist.comments.push( req.body )
//     Artist.save()
//
//     res.render( 'artist/show', { artist: artist } )
//
//   })
// })

artistRouter.get('/edit/:id', (req,res) =>{
  Artist.findById({'_id': req.params.id }, (err, artist) => {
    artist.name = req.body.name
    artist.description = req.body.description
    artist.imageURL = req.body.imageURL
    artist.save()
    res.render( 'artist/edit', {artist: artist})
  })
})

artistRouter.post('/edit/:id', (req,res) =>{

})
module.exports = artistRouter
