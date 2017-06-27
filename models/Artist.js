const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
  name: String,
  id: Schema.Types.ObjectId,
  imgURL: String,
  description: String,
  dateFormed: Date,
  comments: [{
    author: String,
    postDate: Date,
    description: String
  }]
})

const Artist = mongoose.model( 'Artist', artistSchema )

module.exports = Artist
