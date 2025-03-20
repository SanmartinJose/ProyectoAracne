const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

router.get("/test-db", (req, res) => {
  db.query("SELECT 1", (err, results) => {
    if (err) {
      return res.status(500).send("Error conectando a la BD");
    }
    res.send("Conexión exitosa a la BD ✅");
  });
});

module.exports = router;
