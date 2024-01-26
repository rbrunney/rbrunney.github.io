import './styling/app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Pages/Home/Home';
import AboutPage from './components/Pages/About/About';
import ParticleBackgroundEffect from './components/Background/ParticleBackgroundEffect';
import NavigationBar from './components/Navigation/NavigationBar';

function App() {
  return (
    <>
      <ParticleBackgroundEffect />
      <NavigationBar />
      <section id='home'>
        <HomePage />
      </section>
      <section id='about'>
        <AboutPage />
      </section>
      <section id='skills'>
      </section>
      <section id='projects'>
      </section>
      <section id='work'>
      </section>
      <section id='contact'>
      </section>
    </>
  );
}

export default App;
