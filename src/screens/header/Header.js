import React from 'react';
import './header.css';
import Typed from 'react-typed';

function Header() {
  return (
    <div className='main-info'>
      <h1>Who am I?</h1>
      <Typed
        strings={[
          '',
          'A Software Engineer',
          'also known as...',
          'Frontend developer',
          'Backend developer',
          'Fullstack developer',
          'Programmer',
          'Or...',
          'A Coder',
          '',
          '',
        ]}
        typeSpeed={40}
        backSpeed={50}
        // attr='placeholder'
        loop
      >
        {/* <input type='text' /> */}
      </Typed>
    </div>
  );
}

export default Header;
