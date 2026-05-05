const express = require("express");
const app = express();

function obtenerMensaje() {
  return "¡Hola Mundo desde Node.js en la nube!";
}

app.get("/", (req, res) => {
  res.send(obtenerMensaje());
});

app.get("/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
