const router = require('../router/router');
const express = require ('express');
const cors = require('cors');

const app = express();
// Configurar o middleware cors
app.use(cors());

app.use(express.json());
app.use(router);

module.exports = app;