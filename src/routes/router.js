const express = require('express')
const router = express.Router()

const bookController = require('../controllers/booksController');

router.post('/obras', bookController.postBook)
router.get('/obras')
router.put('/obras/:id')
router.put('/obras/:id')

module.exports = router