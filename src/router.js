const routes = require(`express`).Router()
const UserController = require ('../app/controller/UserController')
const LoginController  =  require('../app/controller/LoginController')


routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.post('/login',LoginController.auth)

module.exports = routes
