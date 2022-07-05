mysql = require('mysql')


let base = mysql.createConnection({
    
    host:'192.168.64.2',
    user:'kionou',
    password:'12345',
    database:'immobilier'

})



const pg = require('pg-pool');
require('dotenv').config();


const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;


const pool = new pg.Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});

module.exports=base;