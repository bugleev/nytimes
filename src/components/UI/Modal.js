import React from 'react';
import placeholder from '../placeholder_600.jpg';


const Modal = (props) => {
  let image = props.article.multimedia.length ? `https://static01.nyt.com/${props.article.multimedia[0].url}`
    : "";
  let showCondition = (props.clickState && props.clickedId === props.article._id);
  let pub_date = new Date(props.article.pub_date);
  pub_date = `${pub_date.getFullYear()}\\${pub_date.getMonth() + 1}\\${pub_date.getDate()}`;
  return (
    <div className="modal"

    >
      <div className="uk-card uk-card-default uk-card-body" id="card__stacked">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-card-badge uk-label">{props.article.type_of_material}</div>
          <div className="img-wrapper">
            <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="placeholder" />
            <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >
            </div>
          </div>
          <div className="">
            <h3 className="uk-card-title uk-margin-remove-bottom">{props.article.source}</h3>
            <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date}</time></p>
          </div>
          <p className="uk-text-center card-text">{props.article.headline.main}</p>
        </div>
        <div className="uk-card-footer uk-text-center">
          <button className="uk-button uk-button-text" onClick={(event, id) => props.click(event, props.article._id)}>Read more</button>
        </div>
      </div>
      <style jsx>{`
       .modal{
        position: fixed;
        z-index: 500;
        background-color: #fff;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        padding: 16px;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
       }
       @media (min-width: 600px){
        .modal{
          width: 500px;
          left: calc(50% - 250px);
        }

       }

     `}</style>
    </div>

  )
}
export default Modal;


