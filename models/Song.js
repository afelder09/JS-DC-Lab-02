const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
  name: String,
  artistID: String,
  dateCreated: Date
})

const Song = mongoose.model( 'Song', songSchema )

module.exports = Song
