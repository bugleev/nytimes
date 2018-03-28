import React, { PureComponent } from 'react';
import { navbar, aboutView } from './styles';

const linkData = [
  { name: 'Home Page', link: 'https://www.nytimes.com' },
  { name: 'World', link: 'https://www.nytimes.com/section/world' },
  { name: 'U.S.', link: 'https://www.nytimes.com/section/us' },
  { name: 'Politics', link: 'https://www.nytimes.com/section/politics' },
  { name: 'N.Y.', link: 'https://www.nytimes.com/section/nyregion' },
  { name: 'Business', link: 'https://www.nytimes.com/section/business' },
  { name: 'Opinion', link: 'https://www.nytimes.com/section/opinion' },
  { name: 'Tech', link: 'https://www.nytimes.com/section/technology' },
  { name: 'Science', link: 'https://www.nytimes.com/section/science' },
  { name: 'Health', link: 'https://www.nytimes.com/section/health' },
  { name: 'Sports', link: 'https://www.nytimes.com/section/sports' }
];
const Link = (props) => (
  <li role="presentation">
    <a href={props.links.link} target="_blank">
      {props.links.name}
    </a>
  </li>
)
const AboutView = (props) => (
  <div className={`about-view ${props.show ? 'open' : ''}`}>
    <article className="uk-article">
      <button
        className="uk-button uk-button-text"
        onClick={props.click}
      >Close</button>
      <h1 className="uk-article-title"><a className="uk-link-reset" href="">Heading</a></h1>
      <p className="uk-article-meta">Written by <a >Super User</a> on 12 April 2012. Posted in <a >Blog</a></p>
      <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </article>
    <style jsx>{aboutView}</style>
  </div>
)
const NavbarBody = (props) => (
  <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-navbar-center; cls-inactive: uk-navbar-transparent; top: 100"
    className="wrapper">
    <nav className="uk-navbar-container uk-container-expand">
      <div data-uk-navbar>
        <ul className="uk-navbar-nav uk-navbar-center nav-overlay">
          <li className="uk-active">
            <a href="">Archive</a>
          </li>
          <li>
            <a href="" onClick={(event) => event.preventDefault()}>NYTimes</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                {props.children}
              </ul>
            </div>
          </li>
          <li>
            <a
              className="nav-about"
              onClick={props.click}
            >About</a>
          </li>
        </ul>
      </div>
    </nav>
    <style jsx>{navbar}</style>
  </div>
)

class Navbar extends PureComponent {
  state = {
    aboutView: false
  }
  toggleAboutView = (event) => {
    event.preventDefault();
    this.setState({ aboutView: !this.state.aboutView })
  }
  render() {
    return (
      <div className="uk-width-1-1">
        <AboutView
          show={this.state.aboutView}
          click={this.toggleAboutView}
        />
        <NavbarBody click={this.toggleAboutView}>
          {linkData.map((element, ind) => (
            <Link links={element} key={ind} />
          ))}
        </NavbarBody>
      </div >
    )
  }
}
export default Navbar;