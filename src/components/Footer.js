import React from "react";
import logo from "../assets/logo_transp2.png";

export const Footer = (props) => {
  return (
    <div className="uk-width-3-4@m uk-flex-center footer uk-container" >
      <div className="uk-width-1-1 uk-text-center app-logo">
        <p>The New York Times Archive App</p>
      </div>
      <div className="uk-width-1-1 uk-text-center credits">
        <p className="credit">
          <span>created by</span>
        </p>
        <a href="https://bugleev.com">
          <img className="mx-auto bugol" src={logo} />
        </a>
        <p className="copyright">
          &copy;{" " + new Date().getFullYear()}
        </p>
      </div>

      <style jsx>{`
      .credit {
        display: inline;
        margin-right: 5px;
        font-size: 0.75rem;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }
      .copyright {
        display: inline;
        margin: 0;
        color: #f8f5e7c2;
        font-size: 0.875rem;
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
       
      }
     
      .bugol {
        height: 50px;
        width: 50px;
      }
        .footer{
          color: #f8f5e7c2;
          z-index: 50;
          padding: 0 2rem 0 2rem;
          background-color: #615745;
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
          margin: 0 auto;
          font-size: 0.8rem;
        }
        h5{
          color:  #e8e8e8;
          margin: 0;
          font-size: 0.875rem;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .footer.uk-container > div > div:nth-child(2):before{
          border-left: 1px solid #ccc;
        }
        .uk-list li a{
          color:  #f8f5e7c2;
          text-transform: none;
                   
        }
        .uk-list li a:hover{
          color:  #e8e8e8;
          text-decoration: none;         
        }
        .uk-button-text::before {
         border-bottom: 1px solid #ccc;
          
      }
        .app-logo, .credits{
          margin: 0.5rem;
          color:  #f8f5e7c2;
        }
        
        .app-logo{
          margin: 1rem 0.5rem 10px 0.5rem;
          font-size: 1rem;
        }
      `}</style>
    </div>
  )
}