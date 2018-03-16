import React from 'react';
import { card } from './styles';
import placeholder from './placeholder_600.jpg';



export const Card = (props) => {
  let image = props.article.multimedia.length ? `https://static01.nyt.com/${props.article.multimedia[0].url}`
    : "";
  let pub_date = new Date(props.article.pub_date);
  pub_date = `${pub_date.getFullYear()}\\${pub_date.getMonth() + 1}\\${pub_date.getDate()}`;
  return (
    <div key={props.article._id}>
      <div className="uk-card uk-card-default uk-card-body ">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-card-badge uk-label">{props.article.type_of_material}</div>
          <div className="uk-width-auto img-wrapper">
            <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="placeholder" />
            <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >

            </div>
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{props.article.source}</h3>
            <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date}</time></p>
          </div>
        </div>
        <p className="uk-text-center card-text">{props.article.headline.main}</p>
        {/* <p className="uk-text-center">{props.article.snippet}</p> */}
        <div className="uk-card-footer uk-text-center">
          <a href="" className="uk-button uk-button-text">Read more</a>
        </div>
      </div>
      <style jsx>{card}</style>
    </div>

  )
}


