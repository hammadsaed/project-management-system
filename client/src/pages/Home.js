import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(to bottom, #4CAF50, #2E7D32)',
            color: '#fff',
            padding: '20px',
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>Welcome to the Project Management System!</h1>
            <Link to="/projects" style={{
                fontSize: '1.5rem',
                padding: '15px 30px',
                backgroundColor: '#fff',
                color: '#4CAF50',
                borderRadius: '5px',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
            }} className="btn btn-primary">
                View Projects
            </Link>
        </div>
    );
};

export default Home;
