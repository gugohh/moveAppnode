

const router = require('express').Router() // Llamamos al metodo Router de express 
const controllers = require('../controllers/pagesControl') // ruta

router.get('/', controllers.home) 
router.get('/film/:title', controllers.film) 
router.post('/film/', controllers.filmPost)


module.exports = router