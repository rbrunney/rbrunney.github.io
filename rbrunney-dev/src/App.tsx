import './styling/app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Pages/Home/Home';
import AboutPage from './components/Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/skills" element={<AboutPage />}/>
          <Route path="/projects" element={<AboutPage />}/>
          <Route path="/work" element={<AboutPage />}/>
          <Route path="/contact" element={<AboutPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
