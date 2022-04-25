const { request,response } = require("express");

const controlleurs = class {
    static AccueilGet = (req=request , res=response)=>{
        res.render('index.ejs')
    }
}


module.exports=controlleurs;