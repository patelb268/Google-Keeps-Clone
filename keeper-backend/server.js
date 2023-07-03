const express = require('express');
const cors = require('cors');
const {getClient, connect } = require('./db'); // Import the db.js module
const routes = require('./routes/routes')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use('/keeper', routes);


async function startServer() {
  try {
    await connect(); // Connect to the MongoDB database
    // You can now use the 'client' object to interact with the database in other parts of your application
    // Start the server
    app.listen(port, () => {
        const url = `http://localhost:${port}`;
        console.log(`Server running on ${url}`);
      });
  } catch (err) {
    console.error('Error during startup:', err);
    process.exit(1); // Exit the application with an error code
  }
}

startServer();