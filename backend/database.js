require('dotenv').config();
const knex = require('knex')

exports.db = knex({
	client: process.env.DB_CLIENT,
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password : process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	}
});


// password: '12345678', 8889