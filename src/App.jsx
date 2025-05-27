import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.scss';

// Simple page component for demonstration
const Page = ({ title }) => {
  return (
    <div className="page-container">
      <h1>{title}</h1>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

// Home page with grid layout
const HomePage = () => {
  return (
    <div className="app-container">
      <div className="grid-container">
        {/* The logo tile will be positioned by CSS */}
        <div className="tile logo-tile">VIBE CODE</div>

        {/* Regular tiles */}
        <Link to="/page1" className="tile"></Link>
        <Link to="/page2" className="tile"></Link>
        <Link to="/page3" className="tile"></Link>
        <Link to="/page4" className="tile tile-4">WHOOO</Link>
        <Link to="/page5" className="tile"></Link>
        <Link to="/page6" className="tile"></Link>
        <Link to="/page7" className="tile"></Link>
        <Link to="/page8" className="tile"></Link>
        <Link to="/page10" className="tile"></Link>
        <Link to="/page11" className="tile"></Link>
        <Link to="/page12" className="tile"></Link>
        <Link to="/page13" className="tile"></Link>
        <Link to="/page14" className="tile"></Link>
        <Link to="/page15" className="tile"></Link>
        <Link to="/page16" className="tile tile-16">About</Link>
        <Link to="/page17" className="tile"></Link>
        <Link to="/page18" className="tile"></Link>
        <Link to="/page19" className="tile"></Link>
        <Link to="/page20" className="tile"></Link>
        <Link to="/page21" className="tile tile-21">Showcase</Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page title="Page 1" />} />
        <Route path="/page2" element={<Page title="Page 2" />} />
        <Route path="/page3" element={<Page title="Page 3" />} />
        <Route path="/page4" element={<Page title="Page 4" />} />
        <Route path="/page5" element={<Page title="Page 5" />} />
        <Route path="/page6" element={<Page title="Page 6" />} />
        <Route path="/page7" element={<Page title="Page 7" />} />
        <Route path="/page8" element={<Page title="Page 8" />} />
        <Route path="/page10" element={<Page title="Page 10" />} />
        <Route path="/page11" element={<Page title="Page 11" />} />
        <Route path="/page12" element={<Page title="Page 12" />} />
        <Route path="/page13" element={<Page title="Page 13" />} />
        <Route path="/page14" element={<Page title="Page 14" />} />
        <Route path="/page15" element={<Page title="Page 15" />} />
        <Route path="/page16" element={<Page title="Page 16" />} />
        <Route path="/page17" element={<Page title="Page 17" />} />
        <Route path="/page18" element={<Page title="Page 18" />} />
        <Route path="/page19" element={<Page title="Page 19" />} />
        <Route path="/page20" element={<Page title="Page 20" />} />
        <Route path="/page21" element={<Page title="Page 21" />} />
      </Routes>
    </Router>
  );
}

export default App;
