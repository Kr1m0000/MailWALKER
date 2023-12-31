const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

router.post('/saveNote', noteController.saveNote);
router.get('/getNotes/:id', noteController.getNotes);
router.get('/getBinNotes/:id', noteController.getBinNotes);
router.put('/moveNoteToBin/:id', noteController.moveNoteToBin);

module.exports = router;