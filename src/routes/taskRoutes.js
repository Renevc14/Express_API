const express = require('express');
const router = express.Router();
const { getTasks, createTask, getTaskById, updateTask, patchTaskDone, deleteTask, getUserTasks } = require('../controllers/taskController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, getTasks);
router.post('/', authenticateToken, createTask);
router.get('/:id', authenticateToken, getTaskById);
router.put('/:id', authenticateToken, updateTask);
router.patch('/:id', authenticateToken, patchTaskDone);
router.delete('/:id', authenticateToken, deleteTask);
router.get('/users/:id/tasks', authenticateToken, getUserTasks);

module.exports = router;
