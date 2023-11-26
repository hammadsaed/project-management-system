import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects, handleDelete }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Owner</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => (
                    <tr key={project._id}>
                        <td>{project.title}</td>
                        <td>{project.type}</td>
                        <td>{project.owner}</td>
                        <td>
                            <Link to={`/projects/${project._id}/edit`} className="btn btn-sm btn-primary me-2">Edit</Link>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(project._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProjectList;
