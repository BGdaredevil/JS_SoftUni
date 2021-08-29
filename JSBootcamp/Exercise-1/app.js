const express = require("express");

const router = require("./router");
const config = require("./config/base-setup");
const app = express();

require("./config/express-setup")(app);
require("./config/mongoose-setup")();

app.use(router);

app.listen(config.port, () => console.log(`Server is listening on port ${config.port}...`));
