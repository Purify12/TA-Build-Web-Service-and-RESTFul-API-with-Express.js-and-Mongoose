const express = require("express");

const CourseController = require("../controllers/CourseController");
const router = express.Router();

router.post("/", CourseController.createNewCourse);
router.get("/", CourseController.getAllCourse);
router.get("/:id", CourseController.getCourseByID);
router.patch("/:id", CourseController.updateCourse);
router.delete("/:id", CourseController.deleteCourse);

module.exports = router;
