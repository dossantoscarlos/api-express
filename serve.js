const App = require(`./src/app`)

App.listen(process.env.PORT || '8000', () => {
    console.log("http://localhost:8000/users")
})