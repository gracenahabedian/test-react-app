import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Weather from './pages/Weather';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/weather/:location' element={<Weather />} />
          <Route path='/news' element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
