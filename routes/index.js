var express = require('express');
var router = express.Router();
const ps = require('python-shell');

let options = {
  mode: 'text',
  pythonPath: '/usr/bin/python3',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: '/opt/bitnami/apps/hacknc2019/routes',
  args: ['value1', 'value2']
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/predict', function(req, res) {
  ps.PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    console.log('finished');
    console.log(results);
    res.send(results);
 });
});

module.exports = router;
