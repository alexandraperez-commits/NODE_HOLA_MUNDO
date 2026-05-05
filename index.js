const express = require("express");
const app = express();

function obtenerMensaje() {
  return "¡Hola Mundo desde Node.js en la nube!";
}

// Esta función ahora devuelve la fecha y hora completa
function obtenerHora() {
  let ahora = new Date();
  
  // Formato de fecha: DD/MM/YYYY
  let fecha = ahora.getDate() + "/" + (ahora.getMonth() + 1) + "/" + ahora.getFullYear();
  
  // Formato de hora: HH:MM:SS
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
  
  // Ajuste para que los minutos y segundos siempre tengan 2 dígitos
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  return "Hora actual: " + fecha + ", " + horas + ":" + minutos + ":" + segundos;
}

// Ruta principal que muestra todo junto
app.get("/", (req, res) => {
  let contenido = obtenerMensaje() + "<br>" + obtenerHora();
  res.send(contenido);
});

// Ruta de salud para Render
app.get("/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
