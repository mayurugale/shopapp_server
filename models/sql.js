var connection = require('../config/config');

exports.select = function (data, cb) {
    var query = "SELECT " + data.field + " FROM " + data.tableName
    connection.query(query, function (err, result) {
        if (err)
            cb(err, null)
        else {
            cb(null, result)
        }
    })
};
exports.insert = function (data, cb) {
    var tableName = data.tableName;
    delete data.tableName;
    var query = "INSERT INTO " + tableName + " SET ?"
    connection.query(query, data, function (err, result) {
        if (err)
            cb(err, null)
        else {
            cb(null, result)
        }
    })
};

exports.update = function (data, cb) {
    var tableName = data.tableName;
    var array = []
    delete data.tableName;
    var query = "UPDATE " + tableName + " SET ? WHERE " + data.where + " = ?"
    delete data.where;
    array.push(data)
    array.push(data.id);
    delete data.id;
    console.log(query);
    connection.query(query, array, function (err, result) {
        if (err)
            cb(err, null)
        else {
            cb(null, result)
        }
    })
};