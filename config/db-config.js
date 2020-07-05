module.exports = {
    dialect : 'sqlite', // sqlite or postgres
    host:'localhost',
    username:'root',
    password:'',
    database:'',
    storage:'../database/dbsqlite.sqlite', //for sqlite
    logging:false,
    define:{
        timestamps:true,
        underscored: true,
        underscoredAll:true
    }
}