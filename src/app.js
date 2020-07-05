const express = require(`express`)
const cors = require(`cors`)

class App {

    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.settings()
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    routes() {
        this.express.use(require('./router'))
    }

    settings () {
    //     let whitelist = [`*`]
    //     const corsOptionsDelegate = function (req, callback) {
    //     let corsOptions;
    //     if (whitelist.indexOf('*') == '*' ){
    //         corsOptions = { origin: true }
    //     }else if (whitelist.indexOf(req.header('Origin')) !== -1) {
    //         corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    //     } else {
    //         corsOptions = { origin: false } // disable CORS for this request
    //     }
    //     callback(null, corsOptions) // callback expects two parameters: error and options
    //     }

    // corsOptionsDelegate()

    }
 }

module.exports = new App().express