const express = require('express')
const router = express.Router()

const bookController = require('../controllers/booksController');

router.post('/obras', bookController.postBook)
router.get('/obras/:id', bookController.getBookById)
router.put('/obras/:id', bookController.updateBook)
router.delete('/obras/:id', bookController.deleteBook)

module.exports = router