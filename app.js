const express = require('express');
const base = require('./others/data');
const router = require('./router/routeAccueil');
const app = express();



base.connect((err) =>{
    if (!err) {
        console.log('connexion a la base de donnée');        
        app.set('view engine','ejs');
        app.set('views','./views')
        app.use(express.static('public'));
        app.use('/uploads',express.static('./uploads'))
        app.use(express.json())
        app.use(express.urlencoded({ extended: false })) ;
        app.use('/',router)


    } else {

        console.log('connection echec ' + JSON.stringify(err , undefined ,2),err); 
        
    }
})




app.listen(7000,()=>{
    console.log('connecter au port 7000');
})