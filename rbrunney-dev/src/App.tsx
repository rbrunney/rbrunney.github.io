import './styling/app.scss';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import ParticleBackgroundEffect from './components/page_components/ParticleBackgroundEffect';
import NavigationBar from './components/page_components/NavigationBar';
import ProjectsPage from './components/pages/Projects';
import ContactPage from './components/pages/Contact';

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
      <section id='projects'>
        <ProjectsPage />      
      </section>
      <section id='work'>
      </section>
      <section id='contact'>
        <ContactPage />
      </section>
    </>
  );
}

export default App;
