const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 4000;
const app = express();
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'shelterwala_new'
});

connection.connect(function(err) {
	(err) ? console.log(err) : console.log(connection);
});

require('./routes/index')(app);

app.listen(PORT, () => {
	console.log('App running on port ${PORT}');
});