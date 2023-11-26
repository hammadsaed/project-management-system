import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectForm = ({ projectId }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [owner, setOwner] = useState('');

    useEffect(() => {
        if (projectId) {
            axios.get(`http://localhost:5000/projects/${projectId}`)
                .then(response => {
                    const { title, type, owner } = response.data;
                    setTitle(title);
                    setType(type);
                    setOwner(owner);
                })
                .catch(error => {
                    console.error('Error fetching project:', error);
                });
        }
    }, [projectId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectData = { title, type, owner };

        if (projectId) {
            // Update existing project
            await axios.patch(`http://localhost:5000/projects/${projectId}`, projectData);
        } else {
            // Create new project
            await axios.post('http://localhost:5000/projects', projectData);
        }

        navigate('/projects');
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this project?');

        if (confirmDelete) {
            await axios.delete(`http://localhost:5000/projects/${projectId}`);
            navigate('/projects');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label>Type</label>
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label>Owner</label>
                <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            {projectId && (
                <button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
            )}
        </form>
    );
};

export default ProjectForm;
