import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProjectDetail from './Components/Projects/ProjectDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectName" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;