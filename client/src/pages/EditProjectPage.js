import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';

const EditProjectPage = () => {
    const { id } = useParams();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '20px',
            minHeight: '100vh',
        }}>
            <div className='container w-50 my-5'>
                <h2>Edit Project</h2>
                <ProjectForm projectId={id} />
            </div>
        </div>
    );
};

export default EditProjectPage;
