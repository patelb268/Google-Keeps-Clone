// Function to handle internal server errors (5xx)
function handleInternalServerError(err, res) {
    
    res.status(500).json({ error: 'Internal server error' });
  }
  
  // Function to handle bad requests (4xx)
  function handleBadRequestError(err, res) {

    res.status(400).json({ error: 'Bad request' });
  }
  
  // Function to handle not found errors (404)
  function handleNotFoundError(res) {
    res.status(404).json({ error: 'Not found' });
  }
  
  module.exports = {
    handleInternalServerError,
    handleBadRequestError,
    handleNotFoundError,
  };