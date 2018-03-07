import React from "react";

const Navbar = (props) => {
  return (
    <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 100">
      <nav className="uk-navbar-container">
        <div className="uk-container uk-container-expand">
          <div data-uk-navbar>
            <ul className="uk-navbar-nav">
              <li className="uk-active"><a href="">Active</a></li>
              <li>
                <a href="">Parent</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active"><a href="">Active</a></li>
                    <li><a href="">Item</a></li>
                    <li><a href="">Item</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="">Item</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;