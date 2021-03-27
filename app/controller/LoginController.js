const { User } = require("../models")
const { Op } = require("sequelize");

module.exports = {
    async auth(req,res) {
        try {
            const { username , password } = req.body; 
            let  useremail =  "";

            if ( username != null &&  isNaN(username)){
                useremail = username
            }else {
                matricula = username
            }

            if (password != null) {
                const user = await User.findAll({
                    where: {
                        [Op.and]:[
                            {email: {[Op.eq]: useremail}},

                        ]
                    }
                })
                return res.json(user) 
            }
            console.log(req.body) 
            return res.json({
                msg : "error",
                description: "Password or email invalid",
                code: 404
            })
                           
         } catch (error) {
             console.log(error)
            return res.json(error.parent.code)
        }
       
    },
}