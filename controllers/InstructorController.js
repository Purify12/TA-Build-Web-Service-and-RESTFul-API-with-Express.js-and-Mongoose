const InstructorModel = require("../models/InstructorModels");

class InstructorController {
  static async createNewInstructor(req, res) {
    try {
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const location = body.location;
      const instructor = new InstructorModel({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      const saved = await instructor.save();
      res.status(201).send({
        message: "New instructor created!",
        instructor: saved,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllInstructor(req, res) {
    try {
      const instructorList = await InstructorModel.find();
      res.status(200).send(instructorList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getInstructorByID(req, res) {
    try {
      const id = req.params.id;
      const instructorList = await InstructorModel.findOne({ _id: id });
      res.status(200).send(instructorList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateInstructor(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      // Ambil data dari body
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const location = body.location;
      const instructor = new InstructorModel({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      const instructorUpdate = await InstructorModel.updateOne({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      res.status(200).send({
        message: "Data instructor updated",
        instructor: instructor,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteInstructor(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      const instructorDelete = await InstructorModel.deleteOne({ _id: id });
      res
        .status(200)
        .send({ message: `instructor with id ${id} removed ` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}
module.exports = InstructorController;
