const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Habilitar CORS para todas las rutas
app.use(cors());

// Ruta de prueba
app.get("/", (req: any, res: any) => {
  res.send("¡Hola desde Express con CORS!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
