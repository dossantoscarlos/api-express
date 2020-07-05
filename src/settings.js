//options cors
let whitelist = [`*`]
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf('*') == '*' ){
      corsOptions = { origin: true }
  }else if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
