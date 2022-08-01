const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/cool', function(req, res, next) {
  res.send("You're so cool!");
});

module.exports = router;
