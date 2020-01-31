const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'shelterwala_new'
});

module.exports = function(app) {
	app.get('/', function(req, res) {
		// res.send('Hello this is my first app')
		connection.query('SELECT * from users', function(err, data) {
			(err) ? res.send(err) : res.send(data);
		});
	});

	app.post('/create', function(req, res) {
		// res.send('arun');
		console.log(req.body)
		// let sql = `INSERT INTO users(name, email, mobile, country_code) VALUE(${})`
		// res.send('Hello this is my first app')
		connection.query('SELECT * from users', function(err, data) {
			(err) ? res.send(err) : res.send(data);
		});
	});
};