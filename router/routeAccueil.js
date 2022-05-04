let express= require('express');
const controlleurs = require('../controllers/controlleur');
let router= express.Router();



router.get('/',controlleurs.AccueilGet);
router.post('/',controlleurs.AccueilPost);
router.get('/detail/:id',controlleurs.DetailGet)
router.get('/connexion',controlleurs.Authentification)
router.get('/inscription',controlleurs.registre)
router.get('/recherche',controlleurs.search)






module.exports=router;