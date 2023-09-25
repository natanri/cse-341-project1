const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users');

router.get('/', usersControllers.getAll);
router.get('/:id', usersControllers.getSingle);

//router.post('/', usersControllers.crateUser);

//router.put('/:id', usersControllers.updateUser);

//router.delete('/:id', usersControllers.deleteUser);


module.exports = router;