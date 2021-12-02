const express = require("express");
const cors = require("cors");
const app = express();

// configuring environment variables;
require("dotenv").config();

//importing route.
const user = require("./src/routes/Users");

// allowing cors to handle request from react-frontend.
app.use(cors());

//configuring route.
app.use("/", user);

//port - to listen the app on.
const PORT = process.env.PORT || 3000;

// starting and listening to the port.
app.listen(PORT, () => {
  console.log(`Node App listening on port ${PORT}`);
});
