const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Reportes = sequelize.define("Reportes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING, // Considera ajustar el tipo de dato según tus necesidades
  },
  Genero: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["masculino", "femenino", "prefiero no decirlo"]],
    },
  },
  Edad: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["Joven", "Adulto", "Adulto mayor"]],
    },
  },
  Origen: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: ["redes", "llamada", "correo", "sitio web", "CAU"],
    },
  },
  Responsable: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: ["concesionario transportista", "concesionario de recaudo", "atención al usuario"],
    },
  }, // Aquí cierra la definición de "Responsable"
  TipoDeReporte: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [
        "aire acondicionado",
        "accidente causado por operador",
        "acoplamiento en andenes",
        "permite abordo sin pagar",
        "accidente vehicular con autobús",
        "cerro puertas y no dejó salir",
        "cerro puertas y no dejó ingresar",
        "distracción del operador al manejar",
        "falla mecánica",
        "falta de mantenimiento en autobuses",
        "falta de piezas en autobuses",
        "limpieza en autobuses",
        "mala actitud/mal trato",
        "mal manejo de autobús",
        "no acceso a personas con discapacidad",
        "autobús no completó su recorrido",
        "no se detiene en paradas establecidas",
        "operador se bajó del autobús",
        "problema con checador",
        "reporte por espera de tiempo",
        "falta de señalización en autobuses",
        "autobús a exceso de velocidad",
        "autobús rayado",
        "vendedor ambulante",
        "falta de autobuses",
        "usuario accidentado",
        "problemas visa",
        "alimentos y bebidas",
        "problemas CAU",
        "solicitud de cambio de horario",
        "paradas indebidas",
        "ventanas abiertas",
        "cobro en efectivo",
        "compra de tarjeta",
        "estación sucia",
        "instalación de KVR",
        "objetos extraviados",
        "permite entrada con alimentos y bebidas",
        "petición de revisión de cámaras",
        "problemas con transbordos",
        "problema con torniquete",
        "problema con personal de seguridad",
        "problema con tarjeta",
        "problema con KVR",
        "incidente en estación",
        "no dejan entrar a la estación",
        "problema con tarjeta de crédito",
        "falta de tarjetas KVR",
        "viaje a crédito",
        "estación cerrada",
        "acoso",
        "agradecimientos",
        "ajuste de horario",
        "asientos reservados",
        "atropello de usuario",
        "información de transbordos",
        "información de rutas",
        "información de tarjetas",
        "información de horarios",
        "problemas entre usuarios",
        "reportes generales",
        "reporte de personal operativo",
        "solicitud de empleo",
        "sugerencias y/o mejoras",
        "traslado de mascotas",
        "usuario lesionado en autobús",
        "usuarios alcoholizados",
        "solicitud de información",
        "tarjeta de discapacidad",
        "usuario no atendido",
        "no atendido"
      ],
    },
  },
  Fecha: {
    type: DataTypes.DATE,
  },
  Hora: {
    type: DataTypes.TIME, // Puedes usar TIME si solo necesitas la hora o DATETIME si necesitas fecha y hora
  },
  Lugar: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: ["autobus", "estela", "parabus", "kvr", "estacion"],
    },
  },
  NombreDelLugar: {
    type: DataTypes.STRING,
  },
  NumeroDeAutobus: {
    type: DataTypes.STRING, // Ajusta el tipo de dato según tus necesidades
  },
  Ruta: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: ["Rt1", "Rt2", "Rt3", "Rt4", "Rt5", "Ra1", "Ra2", "Ra3", "Ra4", "Ra5", "Ra6", "Ra7", "Ra8", "Ra9", "Ra10", "Ra11", "Ra12"],
    },
  },
  Telefono: {
    type: DataTypes.INTEGER,
  },
  Descripcion: {
    type: DataTypes.TEXT,
  },
});

module.exports = { Reportes };
