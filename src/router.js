const routes = require(`express`).Router()
const UserConstroller = require ('../app/controller/UserController')

routes.get('/users', UserConstroller.index)
routes.post('/users', UserConstroller.store)

// const { User } = require('../app/models')
// User.findAll().then(resp => console.log(resp)).catch(error => console.log())
module.exports = routes
