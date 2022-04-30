let express= require('express');
const controlleurs = require('../controllers/controlleur');
let router= express.Router();



router.get('/',controlleurs.AccueilGet);
router.get('/detail',controlleurs.DetailGet)




module.exports=router;