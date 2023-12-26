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
    console.log('Connected');
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345' ";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result.affectedRows + "records updated");
    })
})