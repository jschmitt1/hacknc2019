var express = require('express');
var router = express.Router();
const ps = require('python-shell');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/predict', function(req, res) {
  console.log(typeof(req.body.card1));
  let options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3.7',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/opt/bitnami/apps/hacknc2019/routes',
    args: [req.body.card1.toString(), req.body.card2.toString()]
  };
  
  ps.PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    console.log('finished');
    console.log(results);
    res.send(results);
 });
});

module.exports = router;
