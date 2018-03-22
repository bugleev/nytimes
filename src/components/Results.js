import React from "react";
import Card from "./Card";

export const Results = (props) => {

  let error = props.error ? (
    <div data-uk-alert data-uk-animation-toggle
      className={`${props.error.status === 'Search' ? 'uk-alert-primary' : 'uk-alert-danger'}`}
    >
      <a className="uk-alert-close uk-animation-slide-top" data-uk-close onClick={props.handleError}></a>
      <h3 className="uk-text-center uk-animation-slide-top">{props.error.status} Error</h3>
      <p className="uk-text-center uk-animation-slide-top">{props.error.error}</p>
      <style jsx>{`
        .uk-alert-close {
          top: 10px;
          right: -255px;
        }  
        @media only screen and (max-width: 640px) {
          .uk-alert-danger,
          .uk-alert-primary {
            width: 70%;
            margin: 0 0 1rem 2rem;
          }
        }
      `}</style>
    </div>
  ) : null;

  return (
    <div className="results-wrapper uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@l uk-flex-around uk-grid-match" data-uk-grid>
      {error}
      {props.articles.map(article => {
        return (
          <Card key={article._id} article={article} click={props.clickHandler} />
        )
      })}
    </div>
  )
}