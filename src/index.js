const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", 3000);
app.set("json spaces", 2);

app.use(morgan("dev"));
app.use(express.json());

//routes
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
