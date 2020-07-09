var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors({
	origin: 'https://powerjamb.ng'
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
