const App = require(`./src/app`)

//connection database
require(`./src/db-settings`)


App.listen(process.env.PORT || '8080', () => {
    console.log("Serve listen")
})