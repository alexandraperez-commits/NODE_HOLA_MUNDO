const express = require("express");
const app = express();

function obtenerMensaje() {
  return "¡Hola Mundo desde Node.js en la nube!";
}

function obtenerHora() {
  const ahora = new Date();
  const hora = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  return `Hora actual: ${hora}:${minutos}`;
}

function obtenerFecha() {
  const ahora = new Date();
  const dia = ahora.getDate().toString().padStart(2, '0');
  const mes = (ahora.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11
  const anio = ahora.getFullYear();
  return `Día: ${dia}/${mes}/${anio}`;
}

app.get("/", (req, res) => {
  res.send(obtenerMensaje());
});

app.get("/hora", (req, res) => {
  res.send(obtenerHora());
});

app.get("/fecha", (req, res) => {
  res.send(obtenerFecha());
});

app.get("/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
