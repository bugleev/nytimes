import React, { Component } from 'react';

import Form from './Form';
import styles from './styles';
import Header from './Header';
import axios from 'axios';
import { Card } from './Card';
import Modal from './UI/Modal';
import Wrapper from '../hoc/Wrapper';

const apiKey = "87316da987e94bcdaf7f0fae93edc9d8";
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// url += `?api-key=${apiKey}&q=${event.target.value}&begin_date=${beginDate}&end_date=${endDate}`;


class Body extends Component {
  state = {
    query: "",
    articles: [],
    clicked: false,
    chosenArticle: null,
    coords: {},
    error: null
  };

  getQuery = (query) => this.setState({ query });

  clearArticles = () => {
    this.setState({ articles: [] });
  }
  handleFormSubmit = (event) => {
    this.clearArticles();
    const URLquery = `${url}?api-key=${apiKey}${this.state.query}`;
    console.log(URLquery);
    axios.get(URLquery)
      .then(res => {
        if (res.status !== 200) {
          this.setState({ error: { status: res.status, error: res.data.status } });
          return;
        }
        if (!res.data.response.docs.length) {
          this.setState({ error: { status: 'Search', error: 'No results found!' } });
          return;
        }
        this.setState({ articles: res.data.response.docs });
      })
      .catch(err => {
        this.setState({ error: err.response.data })
      })
    event.preventDefault();
  }
  handleCardClick = (event, id, coords) => {
    let chosenArticle;
    this.state.articles.forEach(el => {
      if (el._id === id) chosenArticle = el;
    });
    this.setState({ clicked: !this.state.clicked, chosenArticle, coords });
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.main').classList.add('modal-open');

  }
  handleBackdropClick = () => {
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('.main').classList.remove('modal-open');
    setTimeout(() => this.setState({ clicked: !this.state.clicked }), 400)
  }
  handleError = () => {
    this.setState({ error: null });
  }
  render() {
    let modal = (this.state.clicked) ? (
      <Modal show={this.state.clicked} article={this.state.chosenArticle} backdropClick={this.handleBackdropClick} coords={this.state.coords} />
    ) : null;

    let error = this.state.error ? (
      <div data-uk-alert data-uk-animation-toggle
        className={`${this.state.error.status === 'Search' ? 'uk-alert-primary' : 'uk-alert-danger'}`}
      >
        <a className="uk-alert-close uk-animation-slide-top" data-uk-close onClick={this.handleError}></a>
        <h3 className="uk-text-center uk-animation-slide-top">{this.state.error.status} Error</h3>
        <p className="uk-text-center uk-animation-slide-top">{this.state.error.error}</p>
      </div>
    ) : null;
    return (
      <Wrapper>
        {modal}
        <div className="main">
          <Header />
          <div className="uk-width-3-4@m uk-flex-center results uk-container" >
            <Form onSubmit={this.handleFormSubmit} query={this.getQuery} />
            <div className="results-wrapper uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@l uk-flex-around uk-grid-match" data-uk-grid>
              {error}
              {this.state.articles.map(article => {
                return (
                  <Card key={article._id} article={article} click={this.handleCardClick} />
                )
              })}
            </div>
          </div>
          <style jsx>{styles}</style>
          <style jsx>{`
            .uk-alert-close {
              top: 10px;
              right: -255px;
             }  
          `}</style>
        </div>
      </Wrapper>
    )
  }
}

export default Body;