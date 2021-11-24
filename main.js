const express = require('express');
const cors = require('cors');
const { server } = require('./env.json');
const { clear, print } = require('./app/helper');
const router = require('./app/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(server.port, () => {
  clear();
  print(`Server started on port: ${server.port}`);
});