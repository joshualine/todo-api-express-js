const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger')

const mongoose = require('mongoose')

// Init Express
const app = express();

// -------Init middlewares
// app.use(logger);  //for logging dates and url visited by users
app.use(express.json()); //for stingifying the request JSON
app.use(express.urlencoded({ extended: false }));






// Set up a static folder
// app.use(express.static(path.join(_-dirname, 'public')))


// Todo API Route
app.use('/api/todos', require('./routes/apis/todos'))

//Connect to DB
// mongoose.connect('url here')




app.listen(3000, () => {
  console.log('app listening on port 3000')
});