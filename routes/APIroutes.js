const router = require('express').Router();
const { readAndAppend, readFromFile } = require('../develop/helpers/fsUtils');
const uuid = require('../develop/helpers/uuid');

// GET Route for retrieving all the feedback
router.get('/notes' , (req, res) => 
  readFromFile('./develop/db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
router.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNotes = {
      title,
      text,
      id:uuid(),
    };

    readAndAppend(newNotes, './develop/db/db.json');

    const response = {
      status: 'success',
      body: newNotes,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = router;