const express = require('express');
const router = require('./router/routeAccueil');
const app = express();




app.set('view engine','ejs');
app.set('views','./views')
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false })) ;

app.use('/',router)






app.listen(7000,()=>{
    console.log('connecter au port 7000');
})