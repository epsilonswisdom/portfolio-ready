import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/NavBar';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='resume' element={<ResumePage />} />
        <Route path='projects' element={<ProjectsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
