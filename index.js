// Import library
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const routes = require("./routes");
const db = require("./helpers/db");
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

async function main() {
  try {
    //Connect database
    await db.openDBConnection(uri, {});

    const app = express();
    // Agar dapat mengambil request body
    app.use(express.json()); 
    app.use(routes);

    app.listen(port, () => {
      console.log("server is listening on port", port);
    });
  } catch (error) {
    console.log("main:", error);
  }
}
// menjalankan fungsi main
main(); 
