const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { handleInternalServerError, handleBadRequestError, handleNotFoundError } = require('../error');
const {getClient} = require('../db');

module.exports = router;

//Post Method
router.post('/notes',async (req, res) => {
    try{
        const newNote = {
            title: req.body.title,
            content: req.body.content,
        };
        if (!newNote.title || !newNote.content) {
            handleBadRequestError('err', res);
            return;
          }

        const client = getClient();
        const database = client.db("keeper");
        const collection = database.collection("notes");        
        await collection.insertOne(newNote);
        res.status(201).json({data:newNote});
    }catch(err){
        handleInternalServerError(err, res); // Handle internal server error or bad request
    }
})

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


  
  
  
  
  