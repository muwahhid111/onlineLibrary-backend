const { Router} = require('express');
const {genreController} = require('../controllers/genres.controllers');
const router = Router();

router.post("/admin/genres", genreController.addGenre);
router.get('/genres:id', genreController.getGenre);
router.patch('/admin/genres/:id', genreController.updateGenre);
router.delete('/admin/genres/:id', genreController.dropGenre);


module.exports = router;