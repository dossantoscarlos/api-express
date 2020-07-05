const User = require("../models/User")

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
        const { first_name, last_name, email }  = req.body
 const user = await User.create({
            first_name,
            last_name,
            email
        })
         return res.json(user)
        }catch(error){
            console.log(error)
            return res.json(error.parent.code)
        }
       
    }
}