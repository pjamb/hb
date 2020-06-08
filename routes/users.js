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

	db('users').where({phone: phone}).first()
		.then((data) => {
			if(data.length === 0 || !data.id) {
				db('users').insert({
					phone, email, fname
				}, ['id'])
					.then((id) => {
						res.json({
							status: 'success',
							msg: `User ${id} has been successfully added to the database!`
						});
					})
					.catch((err) => {
						res.status(503).json({
							status: 'error',
							msg: `Problem adding user to the database.\n${err}`
						});
					});
			}
		})
		.catch((err) => {
			console.log(err);
			res.json({
				status: 'error',
				msg: `We're unable to query the database at this time.\n${err}`
			});
		});
})

module.exports = router;
