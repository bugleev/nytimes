import React, { Component } from 'react';
import Form from './Form';
import styles from './styles';
import Header from './Header';
import axios from 'axios';
import scrollDownSmooth from '../helpers/scroll';
import Modal from './UI/Modal';
import Wrapper from '../hoc/Wrapper';
import Results from './Results';
import Pagination from './UI/Pagination';
import Footer from './Footer';
import Warning from './UI/Warning';

const apiKey = "87316da987e94bcdaf7f0fae93edc9d8";
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const Body = (props) => {
  const badBrowser = navigator.userAgent.indexOf("Firefox") !== -1;
  return (
    <div className="main">
      {props.children}
      <style jsx>{styles}</style>
      <style jsx>{`
       .main{
        transition: ${badBrowser ? "none" : "filter 0.5s ease"};
      }
      .main.modal-open {
        transition: ${badBrowser ? "none" : "filter 0.5s ease"};
        filter: ${badBrowser ? "none" : "grayscale(100%) brightness(60%)"};
      }
    `}</style>
    </div>
  )
}

const Container = (props) => (
  <div className="uk-width-3-4@m uk-flex-center results uk-container" >
    {props.children}
    <style jsx>{styles}</style>
  </div>
)

class Layout extends Component {
  state = {
    query: "",
    articles: [],
    clicked: false,
    chosenArticle: null,
    coords: {},
    loading: false,
    error: null,
    pages: {
      current: 1,
      overall: null,
      show: false
    },
    scrollValue: 0,
    offset: 0,
    showWarning: false
  };
  componentDidUpdate() {
    this.state.loading && window.scrollTo(0, document.body.scrollHeight);
  }
  componentWillMount() {
    this.displayWarning();
  }

  displayWarning = () => {
    this.setState({ showWarning: !window.localStorage.getItem("warning") })

    if (!window.localStorage.getItem("warning")) {
      window.localStorage.setItem("warning", "true")
    }
  }
  apiRequest = () => axios.get(`${url}?api-key=${apiKey}${this.state.query}`);

  displayResults = (res, scrollValue = this.state.scrollValue) => {
    if (res.status !== 200) {
      this.setState({ error: { status: res.status, error: res.data.status }, loading: false });
      return;
    }
    if (!res.data.response.docs.length) {
      this.setState({ error: { status: 'Search', error: 'No results found!' }, loading: false });
      return;
    }
    const numberOfPages = res.data.response.meta.hits >= 1000 ? 100 : Math.ceil((res.data.response.meta.hits - 10) / 10);

    this.setState({ articles: res.data.response.docs, error: null, loading: false, pages: { current: this.state.pages.current, overall: numberOfPages, show: true } });
    scrollDownSmooth(scrollValue);
  }

  displayError = (err) => {
    this.setState({ error: err.response ? err.response.data : { error: "Service Unavailable" }, loading: false })
  }

  handleFormSubmit = (event, query, coords) => {
    event.preventDefault();
    if (!query) {
      return this.setState({ articles: [], error: { status: 'Search', error: 'No query provided' }, pages: { show: false } }, () => window.scrollTo(0, document.body.scrollHeight));
    }
    const scrollValue = coords.top + window.scrollY;
    this.setState({ articles: [], query: query + `&page=1`, loading: true, pages: { current: 1 }, scrollValue }, () => {
      this.apiRequest()
        .then(res => this.displayResults(res, scrollValue))
        .catch(err => this.displayError(err))
    });
  }

  handleCardClick = (event, id, coords) => {
    let chosenArticle;
    this.state.articles.forEach(el => {
      if (el._id === id) chosenArticle = el;
    });
    const offset = document.documentElement.scrollTop;
    this.setState({ clicked: !this.state.clicked, chosenArticle, coords, offset });
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('body').style.top = `-${offset}px`;
    document.querySelector('.main').classList.add('modal-open');
  }

  handleBackdropClick = () => {
    document.querySelector('body').classList.remove('modal-open');
    window.scrollTo(0, this.state.offset);
    document.querySelector('.main').classList.remove('modal-open');
    setTimeout(() => this.setState({ clicked: !this.state.clicked }), 250)
  }

  handleErrorMessage = () => {
    this.setState({ error: null });
  }
  closeWarning = () => {
    this.setState({ showWarning: false });
  }
  pageChange = (event, increment) => {
    event.preventDefault();
    const newPage = increment ? this.state.pages.current + 1 : this.state.pages.current - 1;
    const newQuery = this.state.pages.current < 10 ? this.state.query.slice(0, this.state.query.length - 1) + newPage : this.state.query.slice(0, this.state.query.length - 2) + newPage;

    this.setState({ articles: [], query: newQuery, loading: true, pages: { current: newPage, overall: this.state.pages.overall, show: this.state.pages.show } }, () => {
      this.apiRequest()
        .then(res => this.displayResults(res))
        .catch(err => this.displayError(err))
    });
  }

  render() {
    const { clicked, chosenArticle, coords, error, articles, loading, pages, showWarning } = this.state;
    return (
      <Wrapper>
        <Warning show={showWarning} click={this.closeWarning} />
        {clicked ?
          <Modal
            show={clicked}
            article={chosenArticle}
            backdropClick={this.handleBackdropClick}
            coords={coords}
          />
          : null}
        <Body>
          <Header />
          <Container>
            <Form onSubmit={this.handleFormSubmit} />
            <Results
              error={error}
              handleError={this.handleErrorMessage}
              articles={articles}
              clickHandler={this.handleCardClick}
              loadState={loading}
            />
            {pages.show ?
              <Pagination
                handleClick={this.pageChange}
                pages={pages}
              />
              : null}
          </Container>
          <Footer />
        </Body>
      </Wrapper>
    )
  }
}

export default Layout;