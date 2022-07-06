const { request,response } = require("express");
const dataBien = require("../others/requette");
const {validationResult} = require("express-validator");
const jsonwt = require("../midlleware/jsonwebtoken");
const { mailer } = require("../midlleware/nodemailer");
const bcrypt = require("bcryptjs/dist/bcrypt");


const controlleurs = class {
    static AccueilGet = (req=request , res=response)=>{
        dataBien.AfficheBien()
        .then(success=>{   
            console.log(success);       
            res.render('index',{success})
        })
        .catch(error=>{
            console.log('errror',error);
        })
    }

     static AccueilPost = (req=request , res=response)=>{
         dataBien.rechercheBien(req.body)
        .then(success=>{
                  res.render('recherche',{alert:success})     
        })
        .catch(error=>{
            console.log('errror',error);
            res.render('recherche',{error:error})
        })
    }


    static DetailGet = async (req=request , res=response)=>{
        const id = req.params.id
        const bien = await   dataBien.AfficheBienId(id)
        const image = await  dataBien.AffichePhotoId(id)
         res.render('detail',{bien:bien, image:image})    
    }


    static Authentification =  (req=request , res=response)=>{
        if (req.session.user) {
            res.redirect('/profil')
        } else {
        res.render('connexion')         
        } 
    }

     static AuthentificationPost =  (req=request , res=response)=>{
         const result = validationResult(req)
        if (!result.isEmpty() ) {
            const error = result.mapped()
            console.log('rrfrrkrk',error ); 
             res.render('connexion',{alert:error})
        }else{
            dataBien.connectUser(req.body).then(success =>{
                let password = req.body.password;
                let  hash = success.password;
                let  dataUser = {
                       id:success.id, 
                       nom:success.nom,
                       photo:success.image   
              }
               let passwordUser = bcrypt.compareSync(password,hash);
              if (  passwordUser) {
                  req.session.user= dataUser;
                  console.log('ma session est :',req.session);
                   res.redirect('/profil',)
              } else {
                 res.render('connexion',{alert:'mot de passe incorrect'}) 
              }
            }).catch(error =>{
                res.render('connexion',{alert:'Email ou le Mot de passe incorrect !'})
            })
        }
    }



     static AuthentificationToken =(req=request,res=response) =>{
             const TokenId = req.params.id;
             const DecodedToken= jsonwt.VerifierToken(TokenId);
              dataBien.InsertionUser(DecodedToken)
             console.log('eeee',TokenId,DecodedToken);
             res.redirect('/connexion')
    }


    static registreGet =  (req=request , res=response)=>{
        const show_modal = false
        res.render('inscription',{show_modal})
    }

    static registrePost =  (req=request , res=response)=>{
         const result = validationResult(req)
        if (!result.isEmpty() ) {
             const error = result.mapped()
             console.log('rrfrrkrk',error ); 
             const show_modal = false
             res.render('inscription.ejs',{alert:error,show_modal})
        }
        else{
            dataBien.VerifUserUniqu(req.body.email).then(success=>{
                const token= jsonwt.CreerToken(req.body);
                mailer(req.body.email,token)
                const show_modal = req.body.modal
                res.render("inscription",{show_modal})     
            }).catch(error=>{
                const show_modal = false
                res.render('inscription',{alert:error,show_modal})
            })
        } 
    }

    
    static search =  (req=request , res=response)=>{  
        res.render('recherche')
    }
    static AfficheProfil =  (req=request , res=response)=>{
        if (req.session.user) {

            const id = req.session.user.id
            dataBien.AfficheUser(id)
            .then(success=>{
                // console.log(success);
                 res.render('profil',{success})
            })
            .catch(error=>{
                console.log('errrrorr',error);
            })
            
        } else {
           res.redirect('/connexion') 
        }  
    }
     static editerUserGet =  (req=request , res=response)=>{ 
       if (req.session.user) {
            const id = req.session.user.id
            dataBien.AfficheUser(id)
            .then(success=>{
                 res.render('editerProfil',{success})
            })
            .catch(error=>{
                console.log('errrrorr',error);
            })
            
        } else {
           res.redirect('/connexion') 
        } 
    }

    static editerUserPost =  (req=request , res=response)=>{
         dataBien.EditerUser(req.body,req.file)
         res.redirect('/profil')
         console.log(req.body);
    }



    static Contact =  (req=request , res=response)=>{ 
        dataBien.InsertionContact(req.body)
        res.redirect('/')
    }

     static supprimer =  (req=request , res=response)=>{ 
       let id = req.params.id
           dataBien.suppUser(id)
          res.redirect('/logout')
    }

    static logout =  (req=request , res=response)=>{ 
        req.session.destroy() 
        res.redirect('/connexion')
    }

}


module.exports=controlleurs;