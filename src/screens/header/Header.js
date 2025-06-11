import React from 'react';
import './header.css';
import { ReactTyped } from "react-typed";


function Header() {
  return (
    <div className='main-info'>
      <h1>Who am I?</h1>
      <ReactTyped
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
      </ReactTyped>
    </div>
  );
}

export default Header;
