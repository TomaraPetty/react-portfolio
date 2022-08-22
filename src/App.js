import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import { tsParticles } from 'tsparticles';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Particles from 'react-tsparticles';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Header />
      <Particles>
        id='tsparticles' options=
        {{
          background: {
            color: {
              value: '#3B3B3B',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              // onHover: {
              //   enable: true,
              //   mode: "repulse",
              // },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffff5f',
              distance: 150,
              enable: true,
              opacity: 0.5,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
          },
        }}
      </Particles>
      <AboutMe />
      <Technologies />
    </div>
  );
}

export default App;
