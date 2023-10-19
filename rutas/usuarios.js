const express= require("express")
const router = express.Router();
const {Registro}= require("../controllers/User")

router.post("/registro", Registro)



module.exports = router
