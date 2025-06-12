import React from "react";
import "./footer.css";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, i) => (
    <p key={i}>
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function Footer() {
  return (
    <div id="contact" className="footer__container">
      <div className="footer__data__links">{createLinks()}</div>
      <div style={{ textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Copyright All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
