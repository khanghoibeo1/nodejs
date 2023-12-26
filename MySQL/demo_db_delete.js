var mysql = require('mysql');

var con = mysql.createConnection({
    localhost: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'mydb',
})

con.connect(function(err){
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows)
    });
})