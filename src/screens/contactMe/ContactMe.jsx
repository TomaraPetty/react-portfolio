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
            {createLinks()}
        </div>
    </div>
    <div style={{ textAlign: 'center'}}>&copy; {new Date().getFullYear()} Copyright All Rights Reserved</div>
  </div>
  );
}

export default ContactMe;
