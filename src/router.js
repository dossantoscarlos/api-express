const routes = require(`express`).Router()
const UserConstroller = require ('../app/controller/UserController')

routes.get('/users', UserConstroller.index)
routes.post('/users', UserConstroller.store)


module.exports = routes
