const base = require("./data");


const dataAdmin = class {
     static   insertionUser=(into)  =>{
      console.log(into);
        let{genre,titre,description,texte}=into;
        let sql = "INSERT INTO `admin`( `genre`, `titre`, `description`, `texte`) VALUES (?,?,?,?)";
        base.query(sql,[genre,titre,description,texte],(err,result) =>{
            if (result) {
                console.log('result',result);
            } else {
               console.log('error',err); 
            }
        })
    }

     static   insertionBien=(into,image)  =>{
         console.log('fmglnhlm',image);
        return new Promise((resolve,reject) =>{
            let{type_bien, ville, commune, nom_bien, piece, prix_bien, chambre, douche, superficie, description, detail, service}=into;
        let sql = "INSERT INTO `bien`( `type_bien`, `ville`, `commune`, `nom_bien`, `piece`, `prix_bien`, `chambre`, `douche`, `superficie`, `description`, `detail`, `service`, `image`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        base.query(sql,[type_bien, ville, commune, nom_bien, piece, prix_bien, chambre, douche, superficie, description, detail, service,image],(err,result) =>{
            if (result) {
               
                console.log('result',result);
                resolve(result)
            } else {
               console.log('error',err); 
               reject(err)
            }
        })
        })
        
    }


     static   insertionphoto=(id,into)  =>{
         console.log('idddddd',id);
         let arrayphoto=[]
        for (let i = 0; i < into.length; i++) {
            const element = into[i].path;
        console.log('element',element);
        arrayphoto.push(element);            
        }
        console.log('tableau',arrayphoto);

        for (let i = 0; i < arrayphoto.length; i++) {
                    arrayphoto[i];
                    console.log('iiii', arrayphoto[i]);
                    let sql = "INSERT INTO `image`(`nom`, `bienid`) VALUES (?,?)";
                    console.log('idididid',id);
                    base.query(sql,[arrayphoto[i],id.id],(error,result)=>{
                        if (result) {
                            console.log("resultimag",result);
                        } else {
                            console.log('errorimag',error);
                        }
                    }) 
            
        }

    }

     static AfficheContact = () =>{
        return new Promise((resolve,reject)=>{
             let sql ="SELECT * FROM contact  ";
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

       static AfficheUser = () =>{
        return new Promise((resolve,reject)=>{
             let sql ="SELECT * FROM users  ";
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

    
}

module.exports= dataAdmin;