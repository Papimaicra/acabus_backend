const jwt = require("jsonwebtoken")

const generatetoken = (user) => {

    try {
        const token = jwt.sign(user, "AcabusOPD" , {expiresIn:"10m" }) 
        return token 
    } catch (error) {
        console.log(error)
    }

}
module.exports = generatetoken
