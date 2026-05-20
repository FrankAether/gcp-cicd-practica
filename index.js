const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('¡Hola desde mi pipeline CI/CD en Google Cloud!');
});

app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});
