var express = require('express');
var router = express.Router();
const ps = require('python-shell');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/index.html');
});

router.post('/predict', function(req, res) {
  console.log(typeof(req.body.card1));
  let options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3.7',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/opt/bitnami/apps/hacknc2019/routes',
    args: [req.body.card1.toString(), req.body.card2.toString(), req.body.card3.toString(), req.body.card5.toString(), req.body.TransactionAmt.toString(), req.body.TransactionDT.toString(), req.body.addr1.toString(), req.body.dist1.toString(), req.body.dist2.toString(), req.body.D4.toString(), req.body.D2.toString(), req.body.D10.toString(), req.body.D8.toString(), req.body.D1.toString(), req.body.D9.toString(), req.body.C13.toString(), req.body.C1.toString(), req.body.C2.toString(), req.body.C4.toString(), req.body.C5.toString(), req.body.C6.toString(), req.body.C7.toString(), req.body.C8.toString(), req.body.C9.toString(), req.body.C10.toString(), req.body.C11.toString(), req.body.C12.toString()]
  };
  
  ps.PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    console.log('finished');
    console.log(results);
    res.send(results);
 });
});

module.exports = router;
