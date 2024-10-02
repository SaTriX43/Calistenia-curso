import React from "react";
import '../styles/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <p>@Copyright SaTriXCode</p>
      <div className="footer__container-redes">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="footer__icon"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="footer__icon"
        />
        <FontAwesomeIcon
          icon={faTiktok}
          className="footer__icon"
        />
      </div>
    </footer>
  )
}


export default Footer