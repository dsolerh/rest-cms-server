const router = require("express").Router();
const controller = require('../controllers/section.controller')

module.exports = router
  .post("/section", controller.create)
  .get("/section", controller.list)
  .get("/section/:id", controller.getbyId)
  .patch("/section/:id", controller.update)
  .delete("/section/:id", controller.delete);
