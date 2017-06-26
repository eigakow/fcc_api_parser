var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/api/whoami/', function(req, res) {

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (/^.*?,/.test(ip)) { ip = ip.match(/(^.*?),/)[1]}
  var lang = req.headers['accept-language'];
  if (/,[A-z]*;/.test(lang)) { lang = lang.match(/,([A-z]*);/)[1]}
  var os = req.headers['user-agent'];
  if (/\(.*?\)/.test(os)) { os = os.match(/\((.*?)\)/)[1]}

  //console.log(ip, lang, os);
  res.set('Content-Type', 'application/json');
  res.json({ "ip": ip, "language": lang, "os": os});
});

module.exports = router;
