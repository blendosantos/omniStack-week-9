const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/users', SessionController.store);

module.exports = routes;