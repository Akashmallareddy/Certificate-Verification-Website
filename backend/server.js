const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

var indexRouter = require('./routes/index');

require('dotenv').config(); //having environment variables in .env file

//creating express server
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json()); //allow us to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
});

// app.use('/exercises',exercisesRouter);
// app.use('/users',usersRouter);

app.use('/',indexRouter);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('../build'));
// }

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});