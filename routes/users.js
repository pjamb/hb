var express = require('express');
var router = express.Router();

// Setup database in knex
const db = require('knex')({
	client: 'mysql2',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_SCHEMA
	}
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({msg: 'respond with a resource'});
});

router.post('/add', function(req, res) => {
	const { phone, email, fname } = req.body;
	
	db('users').where({phone: adminId}).first()
})

module.exports = router;
