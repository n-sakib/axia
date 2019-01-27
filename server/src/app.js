const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var Song = require("../models/song");

//Setup MongoDb

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/songs');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

//Setup routes

app.get('/', (req, res) => {
  res.send(
    [{
      title: "Welcome To Axia",
      description: "Digital A&R For the Modern Age",
      status: 200,
    }]
  )
})

//Setup Song routes

app.post('/songs', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Song({
    title: title,
    description: description
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Song saved successfully!'
    })
  })
})

// Fetch all posts
app.get('/songs', (req, res) => {
  Song.find({}, 'title description', function (error, songs) {
    if (error) { console.error(error); }
    res.send({
      songs: songs
    })
  }).sort({_id:-1})
})

app.listen(process.env.PORT || 8081)
