const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser, getUserById, updateUser, patchUserStatus, deleteUser } = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id', authenticateToken, updateUser);
router.patch('/:id', authenticateToken, patchUserStatus);
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;
