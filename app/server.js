const express = require("express");
const multer = require("multer");
const upload = multer({dest:'uploads/'});

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/healthcheck", (req, res) => {
  res.json({ 
    health: 'healthy',
    port: PORT,
    mongodb: "connected"
  });
});

app.get("/statuscheck", (req, res) => {
  res.json({ version: '0.01a'})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});