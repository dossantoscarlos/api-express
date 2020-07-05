const App = require(`./src/app`)

App.listen(process.env.PORT || '8080', () => {
    console.log("Serve listen Port 8080")
})