import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProjectList from '../components/ProjectList';

const AllProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = () => {
        axios.get('http://localhost:5000/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this project?');
        if (confirmDelete) {
            axios.delete(`http://localhost:5000/projects/${id}`)
                .then(() => {
                    fetchProjects();
                })
                .catch(error => {
                    console.error('Error deleting project:', error);
                });
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#DFF5CF',
            color: '#fff',
            padding: '20px',
            minHeight: '100vh',
        }}>
            <div className='container w-75 my-5'>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4CAF50' }}>All Projects</h2>
                <ProjectList projects={projects} handleDelete={handleDelete} />
                <Link to="/projects/new" style={{
                    display: 'block',
                    width: '200px',
                    margin: '20px auto',
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    borderRadius: '5px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                }} className="btn btn-primary">
                    Create New Project
                </Link>
            </div>
        </div>
    );
};

export default AllProjectsPage;
