var express = require('express');
var crypto = require('crypto');
var router = express.Router();

var token="xuwencongToken";
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/',function (req,res,next) {
     var signature = req.query.signature;
     var timestamp = req.query.timestamp;
     var nonce  = req.query.nonce;
     var echostr=req.query.echostr;

     var array = new Array(token, timestamp ,nonce);
     array.sort();
     var str= array.toString().replace(/,/g,"");
     var sha1Code=crypto.createHash("sha1");
     var code=sha1Code.update(str,"utf-8").digest("hex");
  if(code == signature){
      res.send(echostr)
  }else{
      res.send("error")
  }

})

module.exports = router;
