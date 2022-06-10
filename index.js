const express = require("express");
const app = express();
const cors = require("cors");
const setup = require("./bin/setup-express");
const syncDatabase = require("./connection/sync-resync")
const db = require('./models/index.model')
setup(app, cors, express);
syncDatabase(false, db);

//setup route
app.use("/api/calculator", require("./routes/calculator.route"))

app.listen(4000, () => console.log("SERVER IS LISTEN ON PORT 4000"));
