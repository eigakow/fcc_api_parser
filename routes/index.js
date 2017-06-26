var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var lang = req.headers['accept-language'].match(/,([A-z]*);/)[1];
  var os = req.headers['user-agent'].match(/\((.*?)\)/)[1];

  //console.log(ip, lang, os);
  res.set('Content-Type', 'application/json');
  res.json({ "ip": ip, "language": lang, "os": os});


});

module.exports = router;
