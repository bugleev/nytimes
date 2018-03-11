import React from "react";

const Navbar = (props) => {
  return (
    <div className="uk-width-1-1">
      <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 100" className="wrapper">
        <nav className="uk-navbar-container uk-container-expand">
          <div data-uk-navbar>
            <ul className="uk-navbar-nav nav-overlay">
              <li className="uk-active"><a href="">Archive</a></li>
              <li>
                <a href="">NYTimes</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active"><a href="">Active</a></li>
                    <li><a href="">Item</a></li>
                    <li><a href="">Item</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="">About</a></li>
            </ul>
            <div className="nav-overlay uk-navbar-right">
              <a className="uk-navbar-toggle" data-uk-icon="search" data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
            </div>
            <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
              <div className="uk-navbar-item uk-width-expand">
                <form className="uk-search uk-search-navbar uk-width-1-1 uk-width-2-3@s ">
                  <input className="uk-search-input" type="search" placeholder="Search..." autofocus />
                </form>
              </div>
              <a className="uk-navbar-toggle" data-uk-close data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
            </div>
          </div>
        </nav>
        <style jsx>{`
      .uk-light .uk-navbar-nav > li.uk-active > a,
      .uk-light .uk-navbar-nav > li > a {
        color: #333;
        font-weight: bold;
      }
      .uk-navbar-transparent{
        background-color: rgba(164, 165, 119, 0.5)
      }
    `}</style>
      </div>
    </div>
  )
}
export default Navbar;