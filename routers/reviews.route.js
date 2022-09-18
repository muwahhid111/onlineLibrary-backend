const { Router } = require('expess');
const { reviewControllers } = require('../controllers/revievs.controllers')
const router = Router();

router.post('/users/:userId/books/:bookId/reviews', reviewControllers.addReview);
router.get('/users/reviews', reviewControllers.getReview);
router.delete('/reviews/:id', reviewControllers.dropReview);
router.patch('/users/reviews/:id', reviewControllers.updateReview);

module.exports = router;
