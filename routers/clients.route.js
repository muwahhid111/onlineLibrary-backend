const { Router } = require('express');
const { usersController } = require('../controllers/clients.controllers');
const router =  Router();

router.post("/admin/users", usersController.addUser); 
router.delete("/admin/users/:id", usersController.dropUser); 
router.patch("/admin/users/:id", usersController.userUpdate); 
router.get("/admin/users", usersController.getUsers); 
router.patch("/admin/users/:userId/block",usersController.userBan); // -заблокировать пользователя

module.exports = router;
