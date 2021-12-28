const ParticipantModel = require("../models/ParticipantsModel");

class ParticipantController {
  static async createNewParticipant(req, res) {
    try {
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const email = body.email;
      const phone = body.phone;
      const courses = body.courses;
      const participant = new ParticipantModel({
        name: name,
        dateOfBirth: dateOfBirth,
        email: email,
        phone: phone,
        courses: courses,
      });
      const saved = await participant.save();
      res.status(201).send({
        message: "new participant created!",
        participant: saved,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllParticipant(req, res) {
    try {
      const participantList = await ParticipantModel.find().populate("courses");
      res.status(200).send(participantList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getParticipantByID(req, res) {
    try {
      const id = req.params.id;
      const participantList = await ParticipantModel.findOne({
        _id: id,
      }).populate("courses");
      res.status(200).send(participantList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateParticipant(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      // Ambil data dari body
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const location = body.location;
      const participant = new ParticipantModel({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      const participantUpdate = await ParticipantModel.updateOne({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      res.status(200).send({
        message: "participant data updated",
        participant: participant,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteParticipant(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      const participantDelete = await ParticipantModel.deleteOne({ _id: id });
      res
        .status(200)
        .send({ message: `participant with id ${id} removed ` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}
module.exports = ParticipantController;
