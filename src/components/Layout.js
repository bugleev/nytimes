import React, { Component } from 'react';

import Form from './Form';
import styles from './styles';
import Header from './Header';
import axios from 'axios';

const apiKey = "87316da987e94bcdaf7f0fae93edc9d8";
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// url += `?api-key=${apiKey}&q=${event.target.value}&begin_date=${beginDate}&end_date=${endDate}`;

class Body extends Component {

  state = {
    queryValue: '',
    articles: []
  };

  handleInputChange = (event) => {
    this.setState({ queryValue: event.target.value });
  }
  handleFormSubmit = (event) => {
    console.log(url);
    const query = `${url}?api-key=${apiKey}&q=${this.state.queryValue}`;
    axios.get(query).then(res => {
      this.setState({ articles: res.data.response.docs });
      console.log(this.state.articles);
    })
    event.preventDefault();
  }


  render() {
    return (
      <div className="main">
        <Header />
        <div className="uk-width-3-4@m uk-flex-center results uk-container" >
          <Form onChange={this.handleInputChange} onSubmit={this.handleFormSubmit} value={this.state.queryValue} />
          <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-flex-around" data-uk-grid>
            {this.state.articles.map((article, index) => {
              return (
                <div key={index}>
                  <div className="uk-card uk-card-default uk-card-body ">
                    <p className="uk-text-center">{article.headline.main}</p>
                    <p className="uk-text-center">{article.snippet}</p>
                  </div>
                </div>
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