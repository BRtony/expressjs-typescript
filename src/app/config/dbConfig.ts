import mysql from 'mysql2';

// local mysql db connection
const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0200",
    database: "tsproj"
});

dbConn.connect(err => {
    if (err) {
        console.log(err)
    }

    console.log("Conectado!");


});

export default dbConn;