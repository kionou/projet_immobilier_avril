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
         console.log(users);
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