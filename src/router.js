const express = require(`express`)
const routes = express.Router()
const UserConstroller = require ('../app/controller/UserController')

routes.get('/users', UserConstroller.index)
routes.post('/users', UserConstroller.store)


module.exports = routes
