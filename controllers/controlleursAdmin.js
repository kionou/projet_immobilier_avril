const { request,response } = require("express");
const dataAdmin = require("../others/requetteAdmin");






const admin = class {
    static accueilGet = (req=request, res= response) =>{
        res.render('admin')
    }
    static accueil = (req=request, res= response) =>{
        console.log('refff',req.body);
        dataAdmin.insertionBien(req.body,req.file.path).then(success=>{
            console.log('successs',success.insertId);
            let id = success.insertId
        res.render('photo',{id:id})

        }).catch(error=>{
            console.log('errror',error);
        })
    }

    static photoGet = (req=request, res= response) =>{
        res.render('photo')
    }

     static photoPost = (req=request, res= response) =>{

         dataAdmin.insertionphoto(req.body,req.files)
    //    console.log('phottttooo',req.files);
        res.send('enregistrer')
    }

}




module.exports=admin;