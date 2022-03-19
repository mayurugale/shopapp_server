var express = require('express');
var router = express.Router();
var md5 = require('md5');
var connection = require('../config/config');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res) => {
  try {
    password = md5(req.body.password);
    var query = "SELECT * FROM tbl_admin where email = '" + req.body.username + "' and password = '" + password + "'";
    connection.query(query, function (err, row, field) {
      if (err) res.send({ ack: false });
      else {
        console.log(row.length);
        if (row.length == 1) {
          if (row[0].email == req.body.username && row[0].password == password) {
            delete row[0].password;
            res.json({ error: false, data: row[0] });
          } else res.json({ ack: false });
        } else res.json({});

      }
    })
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
