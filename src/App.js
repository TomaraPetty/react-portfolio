import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import ParticlesBG from './screens/particles/Particles';
import Portfolio from './screens/portfolio/Portfolio';


function App() {


  return (
    <div className='App'>
      <NavigationBar />
      <Header />
      <ParticlesBG />
      <AboutMe />
      <Technologies />
      <Portfolio />
    </div>
  );
}

export default App;
