const {Model , DataTypes } = require ('sequelize')

class User extends Model{
    static init(sequelize) {
        super.init({
            first_name:DataTypes.STRING,
            last_name:DataTypes.STRING,
            email:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = User