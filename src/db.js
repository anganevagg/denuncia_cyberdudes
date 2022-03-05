const mysql = require("mysql");
const { database } = require("./keys");

const { promisify }  = require("util")

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            process.stderr.write("DATABASE CONNECTION LOST\n")
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            process.stderr.write("DATABASE HAS TO MANY CONNECTIONS\n");
        }
        if(err.code === 'ECONNREFUSED'){
            process.stderr.write("DATABASE CONNECTION WAS REFUSED\n");
        }
    }
    if (connection){
        connection.release();
    }
    process.stdout.write("DB is connected\n");
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;