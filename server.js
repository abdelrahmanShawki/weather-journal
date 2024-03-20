


// Express to run server and routes

const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
    
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 3000;

let listening = () => {console.log('server is running ')}
const server = app.listen(port , listening);


// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

let projectData = {};
app.get('/getProjectData' , (req , res) => {
    res.send(projectData);
})

// Post Route

app.post('/postProjectData' , (req , res) => {
    const {temperature , date , zipCode } = req.body;
    projectData['temperature'] = temperature;
    projectData['date'] = date;
    projectData['zipCode'] = zipCode;


    res.send(projectData);
});


