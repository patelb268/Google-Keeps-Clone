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


//Delete by ID Method
router.delete('/notes/:id', async (req, res) => {
try {
    
    const client = getClient();
    if(!client) handleInternalServerError(err, res);

    const database = client.db("keeper");
    const collection = database.collection("notes");
    const id = req.params.id;
    
    // Use await to wait for the deleteOne operation to complete
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
        // If the deleteOne operation didn't find a matching document
        handleNotFoundError(res);
        return;
    }

    // Respond with a success message
    res.status(200).json({ message: 'Deleted successfully' });
    } catch (err) {
        console.log(err);
        handleBadRequestError(err,res) // Handle internal server error or bad request
    }
});
  
  
  
  
  
  