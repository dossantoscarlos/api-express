const routes = require(`express`).Router()
const UserController = require ('../app/controller/UserController')
const LoginController  =  require('../app/controller/LoginController')
var cors = require('cors')
 
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 
  }
   

// routes.get('/users',cors(corsOptions),  UserController.index)
routes.get('/users',cors(),  UserController.index)
routes.post('/users',cors(), UserController.store)

routes.post('/login',cors() ,LoginController.auth)

module.exports = routes
