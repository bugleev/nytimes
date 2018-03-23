import React, { PureComponent } from 'react';
import { card } from './styles';
import placeholder from './placeholder_600.jpg';



export default class Card extends PureComponent {
  state = {
    opacity: 0,
    transform: '200px',
    showTiming: `${this.props.timing}s`

  }
  componentDidMount() {
    setTimeout(() => this.setState({ opacity: 1, transform: '0' }), 50)

  }
  // shouldComponentUpdate(newProps, newSate) {
  //   console.log(this.props.article._id + " card should update");

  //   // return false;
  // }
  render() {
    let image = this.props.article.multimedia.length ? `https://static01.nyt.com/${this.props.article.multimedia[0].url}`
      : "";
    let pub_date = new Date(this.props.article.pub_date);
    pub_date = `${pub_date.getFullYear()}\\${pub_date.getMonth() + 1}\\${pub_date.getDate()}`;
    return (
      <div className={`card-wrapper`} ref={(el) => this.instance = el} style={{
        opacity: `${this.state.opacity}`, transform: `translateY(${this.state.transform})`
      }}>
        <div className="uk-card uk-card-default uk-card-body" id="card__stacked">
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-card-badge uk-label">{this.props.article.type_of_material}</div>
            <div className="img-wrapper">
              <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="Article Image" />
              <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >
              </div>
            </div>
            <div className="">
              <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.article.source}</h3>
              <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date}</time></p>
            </div>
            <p className="uk-text-center card-text">{this.props.article.headline.main}</p>
          </div>
          <div className="uk-card-footer uk-text-center">
            <button className="uk-button uk-button-text" onClick={
              (event, id) => {
                this.props.click(event, this.props.article._id, this.instance.getBoundingClientRect());
              }
            }
            >Read more
            </button>
          </div>
        </div>
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

