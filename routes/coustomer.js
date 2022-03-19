var express = require('express');
var router = express.Router();
var md5 = require('md5');
var connection = require('../config/config');
var sql = require('../models/sql')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/list', (req, res) => {
    sql.select(req.body, function (err, result) {
        if (err) res.send({ error: true });
        else {
            res.json({ error: false, data: result });
        }
    })

});

router.post('/submit', (req, res) => {
    sql.insert(req.body, function (err, result) {
        if (err) res.send({ error: true });
        else {
            res.json({ error: false, data: result.insertId });
        }
    })
});
router.post('/update', (req, res) => {
    sql.update(req.body, function (err, result) {
        console.log(err, result);
    })
    res.send({ error: true });
});

module.exports = router;
