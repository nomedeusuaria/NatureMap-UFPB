const express = require("express");
const controller = require("../controller/NatureMapController");

const router = express.Router();

router.post("/especies", controller.addEspecies);
router.get("/especies", controller.retornarTodasPlantas);
router.delete("/especies/:id", controller.excluirEspeciePorId);

module.exports = router