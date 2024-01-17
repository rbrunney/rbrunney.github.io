import './styling/app.scss';
import ParticleBackgroundEffect from './components/Background/ParticleBackgroundEffect';
import Home from './components/Home/Home';
import NavigationBar from './components/Navigation/NavigationBar';

function App() {
  return (
    <>
      <ParticleBackgroundEffect />
      <NavigationBar/>
      <Home />
    </>
  );
}

export default App;
