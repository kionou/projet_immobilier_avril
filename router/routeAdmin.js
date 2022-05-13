let express = require('express')
const { ResultWithContext } = require('express-validator/src/chain')
const admin = require('../controllers/controlleursAdmin')
const upload = require('../midlleware/multer')
let routerAdmin = express.Router()

  routerAdmin.get('/',admin.Accueil)
  routerAdmin.get('/voiruser',admin.views)
  routerAdmin.get('/voirbien',admin.bien)
  routerAdmin.get('/close',admin.close)


  routerAdmin.get('/admin',admin.accueilGet)
  routerAdmin.post('/admin',upload.single('photo'),admin.accueil)
  routerAdmin.get('/adminimg',admin.photoGet)
  routerAdmin.post('/adminimg',upload.array('image',12),admin.photoPost)




module.exports= routerAdmin;