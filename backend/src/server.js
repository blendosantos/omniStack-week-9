const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@omnistack-br2jy.mongodb.net/omnistack?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Config Routes
app.use(express.json());
app.use(routes);

app.listen(3333);