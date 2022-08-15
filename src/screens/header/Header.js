import React from 'react';
import Typed from 'react-typed';

function Header() {
  return (
    <div>
      <h1>Who am I?</h1>
      <Typed
        strings={[
          '',
          'A Software Engineer',
          'also known as...',
          'Front-end developer',
          'Back-end developer',
          'Full stack developer',
          'Or...',
          'a coder',
          '',
          '',
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr='placeholder'
        loop
      >
        <input type='text' />
      </Typed>
    </div>
  );
}

export default Header;
