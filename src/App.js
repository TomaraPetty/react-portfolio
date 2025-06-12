import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import ParticlesBG from './screens/particles/Particles';
import Portfolio from './screens/portfolio/Portfolio';
import Card from './screens/contactCard/Card';
import Footer from './screens/footer/Footer';

function App() {


  return (
    <div className='App'>
      <NavigationBar />
      <Header />
      <ParticlesBG />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
