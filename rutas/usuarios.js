const express= require("express")
const router = express.Router();
const {Registro}= require("../controllers/User")
const {Login}= require("../controllers/User")


router.post("/registro", Registro)
router.post("/login", Login)



module.exports = router
