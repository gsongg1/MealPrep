import mysql from 'mysql2';

// setup this later
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //database: 'your_database_name'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

export default connection;