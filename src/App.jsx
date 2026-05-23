import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Job from './pages/Job';
import Jobs from './pages/Jobs';
import Layout from './components/Layout';
import './styles/components/button.scss';
import './styles/components/layout.scss';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="job/:slug" element={<Job />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;