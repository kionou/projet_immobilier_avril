let express= require('express');
const controlleurs = require('../controllers/controlleur');
const upload = require('../midlleware/multer');
const { ValiderRegistre, validerConnection } = require('../midlleware/validator');
let router= express.Router();




router.get('/',controlleurs.AccueilGet);
router.post('/',controlleurs.AccueilPost);
router.get('/detail/:id',controlleurs.DetailGet)
router.get('/connexion',controlleurs.Authentification)
router.get('/connexion/:id',controlleurs.AuthentificationToken)
router.post('/connexion',validerConnection,controlleurs.AuthentificationPost)
router.get('/inscription',controlleurs.registreGet)
router.post('/inscription',ValiderRegistre,controlleurs.registrePost)
router.get('/recherche',controlleurs.search)
router.get('/profil',controlleurs.AfficheProfil)
router.get('/logout',controlleurs.logout)
router.get('/editer/:id',controlleurs.editerUserGet)
router.post('/editer',upload.single('image'),controlleurs.editerUserPost)
router.post('/contact',controlleurs.Contact)






module.exports=router;