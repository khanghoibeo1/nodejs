var mysql = require('mysql');

var con = mysql.createConnection({
    localhost: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'mydb',
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected!');

    var sql = "SELECT * FROM customers ";

    con.query(sql, function(err,result,fields){
        if (err) throw err;
        console.log(result);
    });
});

//Phần 2: chỉ lấy cột
// var mysql = require('mysql');

// var con = mysql.createConnection({
//     localhost: 'localhost',
//     user: 'root',
//     password: '1234',
//     port: 3306,
//     database: 'mydb',
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function(err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// NẾu console.log(result[2].address); => KQ: Apple st 652
//     });
// });

//Phan 3: parameter 3 : fields
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields);
//   });
// });

// // =>>> KQ: [
//   {
//     catalog: 'def',
//     db: 'mydb',
//     table: 'customers',
//     orgTable: 'customers',
//     name: 'name',
//     orgName: 'name',
//     charsetNr: 33,
//     length: 765,
//     type: 253,
//     flags: 0,
//     decimals: 0,
//     default: undefined,
//     zeroFill: false,
//     protocol41: true
//   },
//   {
//     catalog: 'def',
//     db: 'mydb',
//     table: 'customers',
//     orgTable: 'customers',
//     name: 'address',
//     orgName: 'address',
//     charsetNr: 33,
//     length: 765,
//     type: 253,
//     flags: 0,
//     decimals: 0,
//     default: undefined,
//     zeroFill: false,
//     protocol41: true
//   }
// ]

