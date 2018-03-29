import React from "react";
import logoDev from "../assets/images/logo_bugol.png";
import logoSmall from "../assets/images/logo_footer.png";
import { footer } from './styles';

const Footer = (props) => {
  return (
    <div className="uk-width-3-4@m uk-flex-center footer uk-container" >
      <div className="uk-width-1-1 uk-text-center app-logo">
        <p>
          <img className="ny-logo" src={logoSmall} alt="nytimes logo" /> The New York Times Archive App
          <img className="ny-logo" src={logoSmall} alt="nytimes logo" />
        </p>
      </div>
      <div className="uk-width-1-1 uk-text-center credits">
        <p className="credit">
          <span>created by</span>
        </p>
        <a href="https://bugleev.com">
          <img className="mx-auto bugol" src={logoDev} alt="dev logo" />
        </a>
        <p className="copyright">
          &copy;{" " + new Date().getFullYear()}
        </p>
      </div>
      <style jsx>{footer}</style>
    </div>
  )
}
export default Footer;