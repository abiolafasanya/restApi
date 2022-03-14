const router = require("express").Router();
const controller = require("./handler");

//
router.get("/all", controller.getUsers);
router.get("/:id", controller.get);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
