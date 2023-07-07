const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { handleInternalServerError, handleBadRequestError, handleNotFoundError } = require('../error');
const {getClient} = require('../db');

module.exports = router;



//Get all Method
router.get('/notes', async (req, res) => {
   
    try {
        const client = getClient();
        const database = client.db("keeper");
        const collection = database.collection("notes");
        const notes = await collection.find({}).toArray();
        res.set({
            'Content-Type': 'application/json', // Set the content type to JSON
            'Cache-Control': 'no-store', // Example: Disable caching
          });
         // Sending a successful response with a status code of 200
        res.status(200).json({data:notes});
    } catch (err) {
        handleInternalServerError(err, res); // Handle internal server error or bad request
    }
  });


