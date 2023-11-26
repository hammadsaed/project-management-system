import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProjectsPage from './pages/AllProjectsPage';
import NewProjectPage from './pages/NewProjectPage';
import EditProjectPage from './pages/EditProjectPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/projects/new" element={<NewProjectPage />} />
        <Route path="/projects/:id/edit" element={<EditProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
