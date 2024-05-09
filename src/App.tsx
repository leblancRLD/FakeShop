import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/article';
import Welcome from './components/home';
import Abouts from './components/About';
import Logger from './components/login';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Article" element={<Article />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/About" element={<Abouts />} />
          <Route path="/Insert" element={<Logger />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

