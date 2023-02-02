import React from 'react';
import './contactMe.css';
import { navigationLinks } from '../../helpers/navigationLinks';

function createLinks() {
    return navigationLinks.map((e,i) => (
        <p key={i}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
  return (
  <div id="contact" className='contactMe__container'>
    <div className='contactMe__data__links'>
        <div>
            <p>Tomara Petty</p>
            <p>Bend, OR</p>
            <p>tomara.petty@gmail.com</p>
        </div>
        <div>
            {createLinks()}
        </div>
    </div>
    <div style={{ textAlign: 'center'}}>Copyright &copy; {new Date().getFullYear()} All rights reserved</div>
  </div>
  );
}

export default ContactMe;
