const { resolveInclude } = require("ejs");
const base = require("./data");

const dataBien = class {

    static AfficheBien = () =>{
        return new Promise((resolve,reject)=>{
             let sql ="SELECT * FROM bien ";
             base.query(sql,(error,result)=>{
                if (result) {
                    // console.log('resultat',result);
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
             let sql ="SELECT * FROM bien WHERE id = ?";
             base.query(sql,[id],(error,result)=>{
                if (result) {
                    // console.log('resultat',result);
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
}


module.exports= dataBien