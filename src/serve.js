const express = require(`express`)
const cors = require('cors')

const routes = require('./router')

const app = express()

//connection database
require(`./db-settings`)

//cors enabled for unique routes
// app.get('/products/:id', cors(), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for a Single Route'})
//   })

//cors enabled for all routes
app.use(cors())

//json-api
 app.use(express.json())

//use routes
app.use(routes)

//create server
app.listen(`8080`, () => {
    console.log("Serve listen")
})