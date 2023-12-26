var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'mydb'
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');
    
   // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37)";
   var sql = "INSERT INTO customers (name, address) VALUES ?";
   var values = [
    ['John', 'Highway 37'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
   ]; 
   con.query(sql, [values], function(err, result){
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});