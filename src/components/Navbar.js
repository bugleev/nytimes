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
      <h2 className=""><span>About this site</span></h2>
      <div className="about-view__text uk-width-2-3@s">
        <p>This is a web application, that uses NY Times API. With the Article Search API, you can search New York Times articles from Sept. 18, 1851 to today, retrieving headlines, abstracts, lead paragraphs, links to associated multimedia and other article.</p>
        <h2 className="uk-text-center"><span>Copyrights</span></h2>
        <p>The NY Times logos and trademarks and all the content, provided by the API, are owned by The New York Times Company and are not used for any commercial purposes. Owner of website do not accept liability for incorrect spelling, printing errors, misinformation or grammatical inaccuracies in any article found by the app.</p>
        <h2 className="uk-text-center"><span>Non-commercial</span></h2>
        <p>This app DOES NOT:</p>
        <ul className="uk-list uk-list-bullet">
          <li>Sell New York Times content or data in any way</li>
          <li>Charge a subscription fee for any New York Times content or data</li>
          <li>Use content inside itself that is paid or has a paid tier</li>
        </ul>
        <h2 className="uk-text-center"><span>Restriction</span></h2>
        <p>The Article Search API is rate limited to 1,000 calls per day, and 1 call per second.</p>
      </div>
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