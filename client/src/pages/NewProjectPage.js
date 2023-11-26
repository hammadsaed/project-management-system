import React from 'react';
import ProjectForm from '../components/ProjectForm';

const NewProjectPage = () => {
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
                <h2 style={{ textAlign: 'center' }}>Create New Project</h2>
                <ProjectForm />
            </div>
        </div>
    );
};

export default NewProjectPage;
