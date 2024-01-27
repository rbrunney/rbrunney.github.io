import './styling/app.scss';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import ParticleBackgroundEffect from './components/page_components/ParticleBackgroundEffect';
import NavigationBar from './components/page_components/NavigationBar';

function App() {
  return (
    <>
      <ParticleBackgroundEffect />
      <section id='home'>
        <NavigationBar />
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