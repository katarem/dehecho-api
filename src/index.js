const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const certs_url = "../certs/";
app.set("port", 3000);
app.set("json spaces", 2);

app.use(morgan("dev"));
app.use(express.json());

//routes
app.use(cors());
app.use(require("./routes/index"));
https
  .createServer(
    {
      cert: fs.readFileSync(certs_url + "fullchain.pem"),
      key: fs.readFileSync(certs_url + "privkey.pem"),
    },
    app
  )
  .listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
