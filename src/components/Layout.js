import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import styles from './styles';



class Body extends Component {
  render() {
    return (
      <div className="uk-section uk-preserve-color main">
        <Navbar />
        <Form />
        <div className="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match" data-uk-grid>
          <div className="uk-animation-toggle">
            <div className="uk-card uk-card-default uk-card-body uk-animation-slide-top">
              <p className="uk-text-center">Fade</p>
            </div>
          </div>
          <div className="uk-animation-toggle">
            <div className="uk-card uk-card-primary uk-card-body uk-animation-slide-bottom">
              <p className="uk-text-center">Fade</p>
            </div>
          </div>
          <div className="uk-animation-toggle">
            <div className="uk-card uk-card-secondary uk-card-body uk-animation-slide-left">
              <p className="uk-text-center">Fade</p>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>

    )
  }
}

export default Body;