const { MongoClient } = require('mongodb');
require('dotenv').config();

let client;
// Validate Environment Variables
function validateEnvVariables() {
  const requiredEnvVariables = ['MONGO_URI'];

  for (const variable of requiredEnvVariables) {
    if (!process.env[variable]) {
      throw new Error(`Missing required environment variable: ${variable}`);
    }
  }
}

// Connect to MongoDB Database and return the client
async function connect() {
  try {
    validateEnvVariables();

    if (!process.env.MONGO_URI) {
      throw new Error(
        'MongoDB connection URI not provided. Make sure to set the MONGO_URI environment variable.'
      );
    }

    client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

function getClient() {
  if (!client) {
    throw new Error('Call connect() first!');
  }
  return client;
}

module.exports = {getClient,connect};
