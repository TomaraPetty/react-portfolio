import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Fragment, useCallback } from 'react';
import './particles.css';

function ParticlesBG() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
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
            fullScreen: { enable: false },
            background: {
              color: {
                value: '#212529',
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
                value: '#ffffff',
              },
              links: {
                color: '#ffff5f',
                distance: 150,
                enable: true,
                opacity: 0.8,
                // width: 1,
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
        />
      </div>
    </Fragment>
  );
}

export default ParticlesBG;
