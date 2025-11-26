import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Structure from './pages/Structure';
import Contact from './pages/Contact';
import Enrollment from './pages/Enrollment';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/infantil" element={<Education type="infantil" />} />
          <Route path="/fundamental" element={<Education type="fundamental" />} />
          <Route path="/integral" element={<Education type="integral" />} />
          <Route path="/estrutura" element={<Structure />} />
          <Route path="/matriculas" element={<Enrollment />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;