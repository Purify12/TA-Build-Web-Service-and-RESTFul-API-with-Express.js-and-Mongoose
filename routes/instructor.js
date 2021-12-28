const express = require("express");

const InstructorController = require("../controllers/InstructorController");
const router = express.Router();

router.post("/", InstructorController.createNewInstructor);
router.get("/", InstructorController.getAllInstructor);
router.get("/:id", InstructorController.getInstructorByID);
router.patch("/:id", InstructorController.updateInstructor);
router.delete("/:id", InstructorController.deleteInstructor);

module.exports = router;
