import React, { Component } from 'react';
import { navbar } from './styles';

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

class Navbar extends Component {
  componentDidMount() {

  }
  componentWillUpdate() {


  }
  componentDidUpdate() {

  }
  state = {
    aboutView: false,
    coords: ['0%', '0%']
  }
  toggleAboutView = (event) => {
    event.preventDefault();

    this.setState({ aboutView: !this.state.aboutView })
  }
  getCoords = (coords) => {
    const newCoords = [`${this.aboutBtn.offsetLeft}px`, `${coords.top}px`];
    this.setState({ coords: newCoords });
  }
  render() {
    return (
      <div className="uk-width-1-1">
        <div className={`about-view ${this.state.aboutView ? 'open' : ''}`}>
          <article className="uk-article">
            <button
              className="uk-button uk-button-text"
              onClick={(event) => {
                this.toggleAboutView(event)
              }}
              ref={el => { this.closeBtn = el }}
            >Close</button>
            <h1 className="uk-article-title"><a className="uk-link-reset" href="">Heading</a></h1>
            <p className="uk-article-meta">Written by <a >Super User</a> on 12 April 2012. Posted in <a >Blog</a></p>
            <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
        </div>
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
                      {linkData.map((element, ind) => (
                        <Link links={element} key={ind} />
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    className="nav-about"
                    onClick={(event) => {
                      this.toggleAboutView(event)
                    }}
                    ref={el => { this.aboutBtn = el }}
                  >About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <style jsx>{navbar}</style>
        <style jsx>{`
        .uk-navbar {
          margin: 0 auto;
      }
            .uk-navbar-dropdown {
              width: 150px;
              padding: 10px;
              
          }
            .about-view{
              width: 75%;
              height: 100vh;
              background-color: #d4c89e;
              display: block;
              position: fixed;
              margin: 0 auto;
              top: 0;
              left: calc(50% - 37.5%);
              z-index: 999;
              pointer-events: none;
              transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
              clip-path: circle(2px at 57% 3%);
            }  
            .about-view.open{
              pointer-events: all;
              transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
              clip-path: circle(700px at 50% 50%);
            }
            article{
              padding: 2rem;
              position: relative;
            }
            article button{
              position: absolute;
              top: 1rem;
              left: 1rem;;
            } 
            .about-view article *{
             opacity: 0;
            }
            .about-view.open article *{
              animation: fadeIn 0.9s ease 0.1s;
              animation-fill-mode: forwards;
            }
            .about-view.open article h1{
              animation-delay: 0.2s;
            }
            .about-view.open article p:nth-of-type(1){
              animation-delay: 0.3s;
            }
            .about-view.open article p:nth-of-type(2){
              animation-delay: 0.4s;
            }
            .about-view.open article p:nth-of-type(3){
              animation-delay: 0.5s;
            }
            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translate3d(-100px, 0, 0);
                }
              100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
              }
              }
              @media only screen and (max-width: 959px) {
                .about-view{
                  width: 85%;
                  left: calc(50% - 42.5%);
                }
              }
              @media only screen and (max-width: 480px) {
                .about-view{
                  width: 90%;
                  left: calc(50% - 45%);
                  overflow-y: scroll;
                }
              }
   
         `}</style>
      </div >
    )
  }
}
export default Navbar;