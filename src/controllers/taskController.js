const Task = require('../models/task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { userId: req.user.id } });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createTask = async (req, res) => {
    const { name } = req.body;

    try {
        const task = await Task.create({ name, userId: req.user.id });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateTask = async (req, res) => {
    const { name } = req.body;

    try {
        const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        task.name = name;
        await task.save();

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.patchTaskDone = async (req, res) => {
    const { done } = req.body;

    try {
        const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        task.done = done;
        await task.save();

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        await task.destroy();
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { userId: req.params.id } });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
