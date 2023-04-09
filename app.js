require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const StudentRoute = require("./Routes/Students");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(StudentRoute);


const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI)
    .then((result) => {
        app.listen(port, () => {
            console.log("Connected to database !");
            console.log(`Listening on port ${port}...`);
        });
    })
    .catch((err) => {
        console.log(err);
});