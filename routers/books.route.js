const { Router } = require('expess');
const { bookController} = require('../controllers/books.controllers');
const { route } = require('./genres.route');
const router = Router();

router.post('/admin/books', bookController.addBook);
router.delete('/admin/books/:id', bookController.dropBook);
router.patch('/admin/books/:id', bookController.updateBook);
router.get("/books", bookController.getAll);
router.get("/books/:id", bookController.getOne); 
router.get("/books/genres/:id", bookController.getByGenre); 
router.patch("/books/:bookId/users/:userId/rent", bookController.rentBook);
router.patch("/books/:bookId/users/:userId/return", bookController.returnBook)
