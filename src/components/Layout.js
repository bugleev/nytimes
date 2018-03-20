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
    clickedId: '',
    chosenArticle: null,
    coords: {}
  };

  getQuery = (query) => this.setState({ query });


  handleFormSubmit = (event) => {
    const URLquery = `${url}?api-key=${apiKey}${this.state.query}`;
    console.log(URLquery);
    axios.get(URLquery)
      .then(res => {
        this.setState({ articles: res.data.response.docs });
      })
      .catch(err => console.log(err))
    event.preventDefault();
  }
  handleCardClick = (event, id, coords) => {
    let chosenArticle;
    this.state.articles.forEach(el => {
      if (el._id === id) chosenArticle = el;
    });
    this.setState({ clicked: !this.state.clicked, clickedId: id, chosenArticle, coords });

  }
  handleBackdropClick = (event) => {
    setTimeout(() => this.setState({ clicked: !this.state.clicked }), 400)
  }
  render() {
    let modal = (this.state.clicked) ? (
      <Modal show={this.state.clicked} article={this.state.chosenArticle} backdropClick={this.handleBackdropClick} coords={this.state.coords} />
    ) : null
    return (
      <Wrapper>
        <div className="main">
          {modal}
          <Header />
          <div className="uk-width-3-4@m uk-flex-center results uk-container" >
            <Form onSubmit={this.handleFormSubmit} query={this.getQuery} />
            <div className="results-wrapper uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@l uk-flex-around uk-grid-match" data-uk-grid>
              {this.state.articles.map(article => {
                return (
                  <Card key={article._id} article={article} click={this.handleCardClick} clickState={this.state.clicked} clickedId={this.state.clickedId} />
                )
              })}
            </div>
          </div>
          <style jsx>{styles}</style>
          <style jsx>{`
            .results-wrapper{
              padding-bottom: 1rem;
            }
          `}</style>
        </div>
      </Wrapper>
    )
  }
}

export default Body;