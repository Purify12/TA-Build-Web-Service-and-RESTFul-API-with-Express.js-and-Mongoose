const express = require("express");

// creates a new router instance.
const instructorRoute = require("./instructor");
const courseRoute = require("./course");
const participantRoute = require("./participant");
const router = express.Router();

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };
  res.status(200).send(ready);
});

router.get("/", (req, res) => {
  const ready = `<h1>Welcome to Course API</h1>`;
  res.status(200).send(ready);
});

router.use("/instructors", instructorRoute);
router.use("/courses", courseRoute);
router.use("/participants", participantRoute);

module.exports = router;
