const {Usuario}= require("../model/usuarios") 
const bcrypt= require("bcrypt")
const generatetoken =require("../Helpers/Generatetoken")

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


const Login = async(req,res) =>{
    const {username,password} =req.body

    try {
        if(!(username && password)){
            return res.status(400).send({ message: "Incomplete data provided" });
        }
        const usuarioExistente= await Usuario.findOne({ where: { username } })  
        if(!usuarioExistente){
            return res.status(400).json({ message: "Ese usuario no existe" });
        }

        const contraseñaValida = await bcrypt.compare(password, usuarioExistente.password);
        if (!contraseñaValida) {
            return res.status(401).json({ message: "Contraseña incorrecta, intente una vez mas" });
        }

        const token = generatetoken({user: usuarioExistente})

        return res.status(201).json({msg: "incio de sesion correcta!",token: token})


    } catch (error) {
        console.log(error)
    }






}


module.exports={Registro,Login}