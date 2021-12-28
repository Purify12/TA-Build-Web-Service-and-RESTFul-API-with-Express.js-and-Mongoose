const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const routes = require("./routes");
const db = require("./helpers/db");

const port = process.env.PORT || 3000;

const uri = process.env.MONGO_URI;

async function main() {
  try {
    //mastikan database connect
    await db.openDBConnection(uri, {});

    const app = express();

    app.use(express.json()); // biar kita bisa ambil request body
    app.use(routes);

    app.listen(port, () => {
      console.log("server is listening on port", port);
    });
  } catch (error) {
    console.log("main:", error);
  }
}

main(); // menjalankan main
