mysql = require('mysql')


let base = mysql.createConnection({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'immobilier'

})


module.exports=base;