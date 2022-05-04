const { request,response } = require("express");
const dataBien = require("../others/requette");


const controlleurs = class {
    static AccueilGet = (req=request , res=response)=>{
        dataBien.AfficheBien()
        .then(success=>{
            // console.log('suuuccess',success);
            res.render('index',{success})
        })
        .catch(error=>{
            console.log('errror',error);
        })
    }

     static AccueilPost = (req=request , res=response)=>{
        console.log('sdtuyuodlfmjglkmhl',req.body);
         dataBien.rechercheBien(req.body)
        .then(success=>{
                  console.log('suuuccess',success);
                  res.render('recherche',{alert:success})
            
        })
        .catch(error=>{
            console.log('errror',error);
            res.render('recherche',{error:error})
        })
    }


    static DetailGet =  (req=request , res=response)=>{
        const id = req.params.id
        dataBien.AfficheBienId(id)
        .then(success=>{
            // console.log('suuuccess',success);
            res.render('detail',{success})
        })
        .catch(error=>{
            console.log('errror',error);
        })
    }


    static Authentification =  (req=request , res=response)=>{
        res.render('connexion')
    }


    static registre =  (req=request , res=response)=>{
        res.render('inscription')
    }

    
    static search =  (req=request , res=response)=>{  
        res.render('recherche')
    }
}


module.exports=controlleurs;