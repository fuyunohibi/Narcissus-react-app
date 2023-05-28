const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

let criminalData = null; // Variable to store the received data

app.get('/', (req, res) => {
   res.send('Hello, Mesan-Tech!');
});

// Route handler for the GET request to /receiveData
app.get('/receiveData', (req, res) => {
   // Check if criminalData is not null
   if (criminalData) {
      res.json(criminalData);
   } else {
      res.status(404).send('Data not found');
   }
});

app.post('/receiveData', (req, res, next) => {
   const receivedData = req.body;

   console.log('Received data:', receivedData);

   const response = {
      status: 'success',
      message: 'Report generated successfully',
      data: receivedData,
   };

   criminalData = receivedData; // Update the criminalData variable with the received data

   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.json(response);
   console.log('Response sent:', response);

   next();
});

app.listen(4000, () => {
   console.log('Server started successfully');
});
