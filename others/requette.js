const bcrypt = require("bcryptjs");
const { resolveInclude } = require("ejs");
const base = require("./data");


const dataBien = class {

    static AfficheBien = () =>{
        return new Promise((resolve,reject)=>{
             let sql ="SELECT * FROM bien  ";
             base.query(sql,(error,result)=>{
                if (result) {
                 /*    console.log('resultat',result); */
                   

                    resolve(result)
                } else {
                    console.log('r=erro',error);
                    reject(error)
                }
            })
        })
       
    }

    
   

    static AfficheBienId = (id) =>{
        return new Promise((resolve,reject)=>{
             let sql ="SELECT * FROM  bien WHERE id = ?";
             base.query(sql,[id],(error,result)=>{
                if (result) {
                    console.log('resultat',result);
                    resolve(result)
                } else {
                    console.log('r=erro',error);
                    reject(error)
                }
            })
        })
       
    }

    
    static AffichePhotoId = (id) =>{
        return new Promise((resolve,reject)=>{
             let sql ="SELECT * FROM  image WHERE bienid = ?";
             base.query(sql,[id],(error,result)=>{
                if (result) {
                    console.log('resultatgoug',result);
                    resolve(result)
                } else {
                    console.log('r=erro',error);
                    reject(error)
                }
            })
        })
       
    }

     static rechercheBien = (into) =>{
        return new Promise((resolve,reject)=>{
            let{bien,piece}=into
             let sql ="SELECT * FROM `bien` WHERE type_bien = ? or piece = ?";
             base.query(sql,[bien,piece],(error,result)=>{
                if (result=="") {
                     console.log('errorrr',error );
                    reject({message:'Desole l Appartement ou la Maison que vous recherchez n est pas disponible'})
                } else {
                    console.log('resultat',result);
                    resolve(result)
                }
            })
        })
       
    }


    static VerifUserUniqu = (into)=>{
       return new Promise((resolve,reject)=>{
      let  sqle = "SELECT * FROM `users` WHERE `email`= ? ";
        base.query(sqle,[into],(error,result)=>{
            if (result=='') {
               console.log('bopnjour');
                resolve({message:'success'})
            } else {
                reject({message:'Deja inscrit ,essayé avec une autre adresse mail ! '})
            }
        })
       })

    }

    static InsertionUser = (into)=>{
       
        let password = bcrypt.hashSync(into.password, 10);
        let{nom,prenom,email,numero}=into;
        let sql= "INSERT INTO `users`( `nom`, `prenom`, `email`, `numero`, `password`) VALUES (?,?,?,?,?)";
        base.query(sql,[nom,prenom,email,numero,password],(error,result)=>{
            if (result) {
                console.log('resulltte',result);
                return result;
                
            } else {
                console.log('errrorbase',error);
                return error;
            }

        })
    }


     static InsertionContact = (into)=>{
       
      
        let{nom,email,numero,description,idbien}=into;
        console.log('into',into);
        let sql= "INSERT INTO `contact`( `nom`, `email`, `numero`, `description`, `idbien`) VALUES (?,?,?,?,?)";
        base.query(sql,[nom,email,numero,description,idbien],(error,result)=>{
            if (result) {
                console.log('resulltte',result);
                return result;
                
            } else {
                console.log('errrorbase',error);
                return error;
            }

        })
    }

       static connectUser = (into) =>{
       return new Promise ((resolve,reject) =>{
        let sql =`SELECT * FROM users WHERE email = ?`;
             base.query(sql,[into.email],(err,result) =>{
            if (result) {
                resolve(result[0])   
            } else {
                reject({message:'Email ou le Mot de passe incorrect !'})   
            }
        })
        })
       
    }

    static AfficheUser = (into) =>{
        return new Promise((resolve,reject)=>{
             let sql ="SELECT * FROM users WHERE id = ?  ";
             base.query(sql,[into],(error,result)=>{
                if (result) {
                 /*    console.log('resultat',result); */
                   

                    resolve(result)
                } else {
                    console.log('r=erro',error);
                    reject(error)
                }
            })
        })
       
    }

     static EditerUser = (into,photo) =>{
         console.log('rrr',into);
        return new Promise((resolve,reject)=>{
                let{nom,prenom,email,numero,password,lieu,id}=into;
                let sql="UPDATE `users` SET `nom`=?,`prenom`=?,`email`=?,`numero`=?`,`lieu`=?`image`=? WHERE id = ?"

             base.query(sql,[nom,prenom,email,numero,lieu,photo.path,id],(error,result)=>{
                if (result) {
                 /*    console.log('resultat',result); */
                   

                    resolve(result)
                } else {
                    console.log('r=erro',error);
                    reject(error)
                }
            })
        })
       
    }

}


module.exports= dataBien