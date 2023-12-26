var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'mydb',
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function(err, result){
        if(err) throw err;
        // console.log("Table created!");
        console.log("Table updated!");
    });
});