const express = require("express");
const app = express();

const dotenv = require("dotenv");
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" })); // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // support parsing of application/x-www-form-urlencoded post data

app.use('/', require('./routes/user'));

const path = require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3001;
app.listen(port, () => {
 console.log(`Listening to Port :  ${port}`);
});