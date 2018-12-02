const connection = require("./connection.js");

const orm = {
  selectAll: function(cb) {
    let queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(name, cb) {
    let queryString = "INSERT INTO burgers (burger_name) VALUES (?);"

    connection.query(queryString, [name], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(bool, id, cb) {
    let queryString = "UPDATE burgers SET devoured = (?) WHERE " + id

    connection.query(queryString, [bool], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: function(condition, cb) {
    var queryString = "DELETE FROM burgers WHERE " + condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
