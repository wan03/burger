const orm = require("../config/orm.js");

// Burger model

const burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insert: function(name, bool, cb) {
    orm.insertOne(name, bool, function(res) {
      cb(res);
    });
  },
  update: function(bool, id, cb) {
    orm.updateOne(bool, id, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete(condition, function(res) {
      cb(res);
    });
  }
};

 
module.exports = burger;