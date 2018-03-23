import React, { Component } from 'react';

import Form from './Form';
import styles from './styles';
import Header from './Header';
import axios from 'axios';
import { scrollDownSmooth } from '../helpers/scroll';
import Modal from './UI/Modal';
import Wrapper from '../hoc/Wrapper';
import { Results } from './Results';

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
    loading: false,
    error: null
  };

  componentDidUpdate() {
    this.state.loading && window.scrollTo(0, document.body.scrollHeight);

    console.log("body did update");

  }
  shouldComponentUpdate(newProps, newSate) {
    console.log("body should update");

    return true;
  }

  handleFormSubmit = (event, query, coords) => {
    event.preventDefault();

    if (!query) {
      return this.setState({ error: { status: 'Search', error: 'No query provided' } }, () => window.scrollTo(0, document.body.scrollHeight));

    }
    const scrollValue = coords.top + window.scrollY;

    this.setState({ articles: [], query, loading: true }, () => {
      const URLquery = `${url}?api-key=${apiKey}${this.state.query}`;
      console.log(URLquery);
      axios.get(URLquery)
        .then(res => {
          if (res.status !== 200) {
            this.setState({ error: { status: res.status, error: res.data.status }, loading: false });
            return;
          }
          if (!res.data.response.docs.length) {
            this.setState({ error: { status: 'Search', error: 'No results found!' }, loading: false });
            return;
          }
          this.setState({ articles: res.data.response.docs, error: null, loading: false });
          scrollDownSmooth(scrollValue);
        })
        .catch(err => {
          this.setState({ error: err.response ? err.response.data : { error: "Service Unavailable" }, loading: false })
        })

    });
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
    setTimeout(() => this.setState({ clicked: !this.state.clicked }), 250)
  }
  handleError = () => {
    this.setState({ error: null });
  }
  render() {
    let modal = (this.state.clicked) ? (
      <Modal show={this.state.clicked} article={this.state.chosenArticle} backdropClick={this.handleBackdropClick} coords={this.state.coords} />
    ) : null;

    return (
      <Wrapper>
        {modal}
        <div className="main">
          <Header />
          <div className="uk-width-3-4@m uk-flex-center results uk-container" >
            <Form onSubmit={this.handleFormSubmit} />
            <Results error={this.state.error} handleError={this.handleError} articles={this.state.articles} clickHandler={this.handleCardClick} loadState={this.state.loading} />
          </div>
          <style jsx>{styles}</style>
          <style jsx>{`
           @media only screen and (max-width: 480px) {
           html{
              font-size: 14px;
          
           }
          } 
          `}</style>
        </div>
      </Wrapper>
    )
  }
}

export default Body;