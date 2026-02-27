import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Team from './pages/Team';
import Belief from './pages/Belief';
import Connect from './pages/Connect';
import Serve from './pages/Serve';
import Give from './pages/Give';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/team" element={<Team />} />
          <Route path="/belief" element={<Belief />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/serve" element={<Serve />} />
          <Route path="/give" element={<Give />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
