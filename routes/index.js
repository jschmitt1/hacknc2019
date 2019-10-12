var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/predict', function(req, res) {
  var spawn = require("child_process").spawn;
  var process = spawn('python',["./hello.py"]);
  process.stdout.on('data', function(data) { 
    res.send(data.toString()); 
  }) 
});

module.exports = router;
