const { sequelize } = require("./database/db");
const express = require("express");
const cors = require("cors");
const app = express();
const usuariosRutas= require("./rutas/usuarios")


require("./model/usuarios")
require("./model/Reportes")

app.use(cors());
app.use(express.json());
app.use(usuariosRutas)



app.get("/", function (_, res) {

    res.send("<h2>Hola mundo</h2>");
  });
  
  async function main() {
    try {
     await sequelize.sync().then(()=>{
          console.log("Tablas creadas exitosamente");
      });
     
  
      
      app.listen(3000, () => {
        console.log("Servidor en ejecución en el puerto:", 3000);
      });
    } catch (error) {
      console.log("Error al conectar a la base de datos:", error);
    }
  }
  
  main();