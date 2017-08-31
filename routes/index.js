var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get('/get-users', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) throw err;
    res.send(users);
  });
});

module.exports = router;
