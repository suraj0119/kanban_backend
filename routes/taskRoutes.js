// backend/routes/taskRoutes.js
const express = require('express');
const { protect, admin } = require('../middlewares/authMiddleware');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.route('/').post(protect, createTask).get(protect, getTasks);
router.route('/:id').put(protect, updateTask).delete(protect, admin, deleteTask);

module.exports = router;
