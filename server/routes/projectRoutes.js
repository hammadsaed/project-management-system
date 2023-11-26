const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Route for fetching all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route for creating a new project
router.post('/', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        type: req.body.type,
        owner: req.body.owner,
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route for getting a single project by ID
router.get('/:id', getProject, (req, res) => {
    res.json(res.project);
});

// Route for updating a project by ID
router.patch('/:id', getProject, async (req, res) => {
    if (req.body.title != null) {
        res.project.title = req.body.title;
    }
    if (req.body.type != null) {
        res.project.type = req.body.type;
    }
    if (req.body.owner != null) {
        res.project.owner = req.body.owner;
    }
    try {
        const updatedProject = await res.project.save();
        res.json(updatedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route for deleting a project by ID
router.delete('/:id', getProject, async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);

        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getProject(req, res, next) {
    let project;
    try {
        project = await Project.findById(req.params.id);
        if (project == null) {
            return res.status(404).json({ message: 'Project not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.project = project;
    next();
}

module.exports = router;
