// Lines 2-11: Uing the rules imported from the express-validator, signup and login are validated 
const { check } = require('express-validator');
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
//Lines 13-19: Creating variables to store imported NPM packages
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();


app.use(express.json());	// parse JSON
app.use(bodyParser.json());	// use bodyParser to parse JSON
app.use(bodyParser.urlencoded({	//this line parses bodies encoded with a URL
   extended: true
}));

app.use(cors());	// Use Cross orgin resource sharing 

app.get('/', (req, res) => {
	res.send('Node js file upload rest apis');	// respond by sending string Node js file...
 });
 app.post('/register', signupValidation, (req, res, next) => {	// on the register page, post information from here to server
   // your registration code
 });
 app.post('/login', loginValidation, (req, res, next) => {	// // on the login page, post information from here to server
   // your login code
 });

 // Handling Errors
 app.use((err, req, res, next) => {		// In case of erros, change the status code to 500, send a message saying "Internal server error", present the error in a JSON object form
	// console.log(err);
	err.statusCode = err.statusCode || 500;
	err.message = err.message || "Internal Server Error";
	res.status(err.statusCode).json({
	  message: err.message,
	});
 });
 app.listen(3000,() => console.log('Server is running on port 3000'));		// run the server on port 3000 and log to the console "Server is running on port 3000"
 