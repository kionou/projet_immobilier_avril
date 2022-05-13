const { request,response } = require("express");
const dataBien = require("../others/requette");
const dataAdmin = require("../others/requetteAdmin");







const admin = class {

     static Accueil = (req=request, res= response) =>{
        res.render('indexAdmin')
    }

     static views = async (req=request, res= response) =>{
         let contacts = await dataAdmin.AfficheContact()
         let users = await dataAdmin.AfficheUser()
        res.render('bien',{ contact:contacts, user:users})
    }


    static bien = (req=request, res= response) =>{
          dataBien.AfficheBien().then(success=>{
             res.render('pagebien',{bien:success})    
        }).catch(error=>{
            console.log('errror',error);
        })
    }

    static accueilGet = (req=request, res= response) =>{
        res.render('admin')
    }
    static accueil = (req=request, res= response) =>{
        dataAdmin.insertionBien(req.body,req.file.path).then(success=>{
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
        res.redirect('/Admin/close')
    }

     static close = (req=request, res= response) =>{
        res.render('close')
    }

}


module.exports=admin;