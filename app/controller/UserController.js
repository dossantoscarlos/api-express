 const { User } = require("../models")
 const { Op } = require("sequelize")

module.exports = {
    async index(req,res) {
        try {
            const user = await User.findAll()
            return res.json(user)    
         } catch (error) {
             console.log(error)
            return res.json(error.parent.code)
        }
       
    },
    async store(req, res) {
        try{  
            const {password, name, email }  = req.body

            if (isNaN(name) && isNaN(email)){   
                if(password != null && name != null && email != null ){
                    
                    const emailUnique =await User.findAll({
                        where:{
                            email: {
                                [Op.eq]: email
                            }
                        }
                    }) 
                    
                    if (emailUnique.length  == 0 ) {
                        const user = await User.create({ name,password,email})
                
                        return res.json({
                            mensagem: "Create success user",
                            code:  204
                        })
                    }else{
                        return res.json({
                            type: 'Error',
                            msg: "User Exist",
                            code:  201
                        })
                    }
                }else  {
                    return res.json({
                        type: "Error",
                        msg: "Failed create user",
                        code:  201
                    })
                }
            }else {
                return res.json({
                    type: "Error",
                    msg : "email ou nome so nao pode ser numero",
                    code:  201
                })
            }
        }catch(error){
            console.log(error)
            return res.json(error.parent.code)
        }
       
    }
}