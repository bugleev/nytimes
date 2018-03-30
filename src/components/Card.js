import React, { PureComponent } from 'react';
import { card } from './styles';
import { format } from 'date-fns';
import placeholder from '../assets/images/placeholder_600.jpg';

const CardContainer = (props) => (
  <div className="uk-card uk-card-default uk-card-body" id="card__stacked">
    {props.children}
    <style jsx>{card}</style>
  </div>
)

const CardFooter = (props) => (
  <div className="uk-card-footer uk-text-center">
    <button className="uk-button uk-button-text" onClick={props.click}>Read more
    </button>
    <style jsx>{card}</style>
    <style jsx>{`
          .uk-card-footer{
            position: absolute;
            bottom: 20px;
            width: 75%;
            margin: 0 auto;
          }
          
        `}</style>
  </div>
)
const CardBody = (props) => {
  const article = props.article;
  let image = article.multimedia.length ? `https://static01.nyt.com/${article.multimedia[0].url}`
    : "";

  let pub_date = format(new Date("2018-03-29T23:42:00"), 'DD/MM/YYYY');
  return (
    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
      <div className="uk-card-badge uk-label">{article.type_of_material}</div>
      <div className="img-wrapper">
        <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="Article" />
        <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >
        </div>
      </div>
      <div className="">
        <h3 className="uk-card-title uk-margin-remove-bottom">{article.source}</h3>
        <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date}</time></p>
      </div>
      <p className="uk-text-center card-text">{article.headline.main}</p>
      <style jsx>{card}</style>
    </div>
  )
}
export default class Card extends PureComponent {
  state = {
    opacity: 0,
    transform: '200px',
    showTiming: `${this.props.timing}s`

  }
  componentDidMount() {
    setTimeout(() => this.setState({ opacity: 1, transform: '0' }), 50)
  }
  render() {
    return (
      <div
        className={`card-wrapper`}
        ref={(el) => this.instance = el}
        style={{
          opacity: `${this.state.opacity}`, transform: `translateY(${this.state.transform})`
        }}>
        <CardContainer>
          <CardBody article={this.props.article} />
          <CardFooter
            click={(event, id) => {
              this.props.click(event, this.props.article._id, this.instance.getBoundingClientRect())
            }}
          />
        </CardContainer>
        <style jsx>{card}</style>
        <style jsx>{`
          .card-wrapper{
            opacity: 0;
            transition: all ${this.state.showTiming} ease-in;
            
          }
          .card-wrapper.open{
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}

