module.exports = {
    dialect : 'sqlite',
    host:'localhost',
    username:'root',
    password:'',
    storage:'../database/db.sqlite',
    define:{
        timestamps:true,
        underscored: true
    }
}