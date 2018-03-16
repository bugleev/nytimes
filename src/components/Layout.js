import React, { Component } from 'react';

import Form from './Form';
import styles from './styles';
import Header from './Header';
import axios from 'axios';
import { Card } from './Card';

const apiKey = "87316da987e94bcdaf7f0fae93edc9d8";
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// url += `?api-key=${apiKey}&q=${event.target.value}&begin_date=${beginDate}&end_date=${endDate}`;

class Body extends Component {
  state = {
    query: "",
    articles: []
  };

  getQuery = (query) => this.setState({ query })

  handleFormSubmit = (event) => {
    const URLquery = `${url}?api-key=${apiKey}${this.state.query}`;
    console.log(URLquery);
    axios.get(URLquery).then(res => {
      this.setState({ articles: res.data.response.docs });
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className="uk-width-3-4@m uk-flex-center results uk-container" >
          <Form onSubmit={this.handleFormSubmit} query={this.getQuery} />
          <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-flex-around" data-uk-grid>
            {this.state.articles.map(article => {
              return (
                <Card article={article} />
              )
            })}
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

export default Body;