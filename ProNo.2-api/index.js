import d_categoria from "./models/d_categoria.js"
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

const dados = await d_categoria.findAll()
console.log(dados)
