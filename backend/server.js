const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});
const colors = require('colors');

const app = express();
const db_connection = require('./config/db.config');
db_connection();







app.listen(process.env.PORT, () => {

    const message = `server is running at ${process.env.PORT}`.magenta;
    console.log(`\t${message}\n-------------------------`);
});