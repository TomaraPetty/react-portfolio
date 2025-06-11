import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Fragment, useCallback } from 'react';
import './particles.css';

function ParticlesBG() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Fragment>
      <div className='particles-container'>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // fullScreen: { enable: false },
            background: {
              color: {
                value: "#F8F1F1",
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
                  opacity: 0.1,
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
                value: "#5EAAA8",
              },
              links: {
                color: "#5EAAA8",
                distance: 150,
                enable: true,
                opacity: 0.8,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'out',
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
          }}
        />
      </div>
    </Fragment>
  );
}

export default ParticlesBG;
