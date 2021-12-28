const CourseModel = require("../models/CoursesModel");

class CourseController {
  static async createNewCourse(req, res) {
    try {
      const body = req.body;
      const title = body.title;
      const description = body.description;
      const instructor = body.instructor;
      const scheduleDateTime = body.scheduleDateTime;
      const course = new CourseModel({
        title: title,
        description: description,
        instructor: instructor,
        scheduleDateTime: scheduleDateTime,
      });
      const saved = await course.save();
      res.status(201).send({
        message: "new course created!",
        course: saved,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllCourse(req, res) {
    try {
      const courseList = await CourseModel.find().populate("instructor");
      res.status(200).send(courseList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getCourseByID(req, res) {
    try {
      const id = req.params.id;
      const courseList = await CourseModel.findOne({ _id: id }).populate(
        "instructor"
      );
      res.status(200).send(courseList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateCourse(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      // Ambil data dari body
      const body = req.body;
      const title = body.title;
      const description = body.description;
      const instructor = body.instructor;
      const scheduleDateTime = body.scheduleDateTime;
      const course = new CourseModel({
        title: title,
        description: description,
        instructor: instructor,
        scheduleDateTime: scheduleDateTime,
      });
      const courseUpdate = await CourseModel.updateOne({
        title: title,
        description: description,
        instructor: instructor,
        scheduleDateTime: scheduleDateTime,
      }).populate("instructor");
      res.status(200).send({
        message: "course data updated",
        course: course,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteCourse(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      const courseDelete = await CourseModel.deleteOne({ _id: id });
      res
        .status(200)
        .send({ message: `course with id ${id} removed ` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}
module.exports = CourseController;
