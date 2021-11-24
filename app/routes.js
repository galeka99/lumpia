const router = require('express').Router();

//----------- CONTROLLER IMPORT HERE -----------//
const homeController = require('./controllers/home');
const userController = require('./controllers/user');
//----------- CONTROLLER IMPORT HERE -----------//

//----------- MIDDLEWARE IMPORT HERE -----------//
const userMiddleware = require('./middlewares/user');
//----------- MIDDLEWARE IMPORT HERE -----------//

//----------- ROUTE SECTION HERE -----------//
router.get('/', homeController.index);

router.post('/user/login', userController.login);
router.get('/user/info', userMiddleware.auth, userController.info);
//----------- ROUTE SECTION HERE -----------//

module.exports = router;