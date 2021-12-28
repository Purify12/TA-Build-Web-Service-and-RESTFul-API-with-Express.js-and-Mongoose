const express = require("express");

const ParticipantController = require("../controllers/ParticipantController");
const router = express.Router();

router.post("/", ParticipantController.createNewParticipant);
router.get("/", ParticipantController.getAllParticipant);
router.get("/:id", ParticipantController.getParticipantByID);
router.patch("/:id", ParticipantController.updateParticipant);
router.delete("/:id", ParticipantController.deleteParticipant);

module.exports = router;
