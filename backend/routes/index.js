var express = require('express');
var multer = require('multer');
var path = require('path');
var Candidate=require('../modules/candidate');
var router = express.Router();
// var Xandidate = candidateModel.find({});

router.use(express.static(__dirname+"./public/"));

if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

var Storage= multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('file');

/* GET home page. */
// router.get('/admin', function(req, res, next) {
//   candidate.exec(function(err,data){
//     if(err) throw err;
//     res.render('index', { title: 'Candidate Records',records: data });
//   });
  
// });

router.route('/admin').get((req,res)=>{
    Candidate.find()
        .then(candidates=> res.json(candidates))
        .then(err=> res.status(400).json('Error: ' + err));
});

// router.get('/', function(req, res, next) {
//     res.render('displaycand', { title: 'Candidate Verification'});
// });


// router.post('/', function(req, res, next) {
//   candidate.exec(function(err,data){
//     if(err) throw err;
//     res.render('index', { title: 'Candidate Records',records: data });
//   });
  
// });

// router.post("/admin/",upload,function(req, res, next) {
//   var candidateDetails = new candidateModel({
//     name: req.body.uname,
//     code: req.body.code,
//     event: req.body.event,
//     date: req.body.date,
//     month: req.body.month,
//     year: req.body.year,
//     image: req.file.filename
//   });
//   candidateDetails.save(function(err,req1){
//     if(err) throw err;
//     candidate.exec(function(err,data){
//       if(err) throw err;
//       res.render('index', { title: 'Candidate Records', records:data });
//         });
//   })
// });

router.post("/admin/",upload,function(req, res, next) {
    var candidateDetails = new Candidate({
      code: req.body.code,
      name: req.body.name,
      event: req.body.event,
      date: req.body.date,
      month: req.body.month,
      year: req.body.year,
    //   image: req.file.filename
    });
    candidateDetails.save()
        .then(() => res.json('Candidate added!'))
        .catch(err => res.status(400).json('Error: ' + err));
  });

// router.post("/",function(req, res, next) {

//     var code = req.body.code;

//     var filterParameter = {
//       code : code
//     }

//     var candidateFilter = Candidate.find(filterParameter);

//     candidateFilter.exec(function(err,data){
//       if(err) throw err;
//       res.render('displaydetails', { title: 'Candidate Details', records:data });
//         });
// });

// router.post("/",function(req, res, next) {

//     var code = req.body.code;
//     console.log(code);
//     var filterParameter = {
//       code : code
//     }

//     Candidate.find(filterParameter)
//     .then(candidate => res.json(candidate))
//     .then(err=> res.status(400).json('Error: ' + err));
// });

router.post("/",function(req, res, next) {

  var code = req.body.code;
  console.log(code);
  var filterParameter = {
    code : code
  }

  Candidate.find(filterParameter)
  .then(candidate => res.json(candidate))
  .catch(err=> res.status(400).json('Error: ' + err));
});

module.exports = router;
