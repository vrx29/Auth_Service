const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = () => {
  app.listen(3001, () => {
    console.log(`Server Started on PORT: ${PORT}`);
  });
};

prepareAndStartServer();
