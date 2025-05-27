import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';

// Import custom page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HoverEffectsPage from './pages/HoverEffectsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page16" element={<AboutPage />} />
        <Route path="/hover-effects" element={<HoverEffectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
