var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('test with xiaomi');

  res.render("xiaomi",{leijun:"Are you Ok laldsdsdsal"})
});

module.exports = router;
