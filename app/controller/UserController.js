 const { User } = require("../models")

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
            const user = await User.create({ name,password,email})
            return res.json(user)
        }catch(error){
            console.log(error)
            return res.json(error.parent.code)
        }
       
    }
}