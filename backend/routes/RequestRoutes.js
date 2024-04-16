const express = require("express");
const router = express.Router();
//Insert Controller
const RequestController = require("../controllers/RequestControllers");

router.get("/", RequestController.getAllRequest);
router.post("/", RequestController.addRequest);
router.get("/:id", RequestController.getById);
router.put("/:id", RequestController.updateRequest);
router.delete("/:id", RequestController.deleteRequest);

//export
module.exports = router;
