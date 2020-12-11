const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/candidate',{useNewUrlParser: true});

// var conn = mongoose.connection;

const candidateSchema = new mongoose.Schema({
    code: Number,
    name: String,
    event: String,
    date: Number,
    month: String,
    year: Number,
    image: String
});

var candidateModel = mongoose.model('CandidateColl', candidateSchema);

module.exports=candidateModel;