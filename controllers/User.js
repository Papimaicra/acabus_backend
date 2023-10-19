const {Usuario}= require("../model/usuarios") 
const bcrypt= require("bcrypt")

const Registro= async(req,res) =>{
    const {username,password} = req.body
    try {
        if(!(username && password)){
            return res.status(400).send({ message: "Incomplete data provided" });
        }

        const usuarioExistente= await Usuario.findOne({username})  
        if(usuarioExistente){
            return res.status(400).json({ message: "Este email ya esta en uso, inicia sesion" });
        }

        const salt=bcrypt.genSaltSync(10)
        const encryptedPassword = await bcrypt.hash(password, salt);
        

        const nuevoUsuario = await Usuario.create({
            username: username,
            password: encryptedPassword
        })

        return res.status(201).json(nuevoUsuario);

    } catch (error) {
        
    }

}


module.exports={Registro}