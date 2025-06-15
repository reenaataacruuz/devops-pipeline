const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
