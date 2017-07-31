var express = require('express');
var router = express.Router();

var lyrics = ['Boss up bro', 'I\'m happy', 'Money on my mind', 'I got cash flow', 'racks on racks on racks',
'quote me or else'];

router.get('/lyric', function (req, res) {
  res.send(lyrics[Math.floor(Math.random() * lyrics.length)]);
});



module.exports = router;
