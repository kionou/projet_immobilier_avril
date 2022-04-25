let express= require('express');
const controlleurs = require('../controllers/controlleur');
let router= express.Router();



router.get('/',controlleurs.AccueilGet);




module.exports=router;