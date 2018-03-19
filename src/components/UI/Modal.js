import React from 'react';
import placeholder from '../placeholder_600.jpg';
import { card } from '../styles';
import Wrapper from '../../hoc/Wrapper';
import Backdrop from './Backdrop';


const Modal = (props) => {
  let image,
    pub_date;
  if (props.article) {
    image = props.article.multimedia.length ? `https://static01.nyt.com/${props.article.multimedia[0].url}`
      : "";
    pub_date = new Date(props.article.pub_date);
    pub_date = `${pub_date.getFullYear()}\\${pub_date.getMonth() + 1}\\${pub_date.getDate()}`;
  }
  return (
    <Wrapper>
      <Backdrop show={props.show} />
      <div className="modal" style={{
        transform: props.show ? 'scale(1,1)' : 'scale(0.1,0.1)',
        opacity: props.show ? '1' : '0'
      }}>
        <div className="uk-card uk-card-default uk-card-body" id="card__stacked">
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-card-badge uk-label">{props.article ? props.article.type_of_material : 'blank'}</div>
            <div className="img-wrapper">
              <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="placeholder" />
              <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >
              </div>
            </div>
            <div className="">
              <h3 className="uk-card-title uk-margin-remove-bottom">{props.article ? props.article.source : 'blank'}</h3>
              <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date || 'blank'}</time></p>
            </div>
            <p className="uk-text-center card-text">{props.article ? props.article.headline.main : 'blank'}</p>
          </div>
          <div className="uk-card-footer uk-text-center">
            <button className="uk-button uk-button-text" onClick={(event, id) => props.click(event, props.article._id)}>Read more</button>
          </div>
        </div>
        <style jsx>{card}</style>
        <style jsx>{`
       .modal{
        position: fixed;
        z-index: 1000;
        background-color: #fff;
        width: 80%;
        left: calc(50% - 40%);
        height: 60%;
        top: calc(50% - 30%);
        border: 1px solid #ccc;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        padding: 16px;
        box-sizing: border-box;
        transition: all 0.4s ease-out;
       }
       @media (min-width: 1200px){
        .modal{
          width: 50%;
          left: calc(50% - 25%);
          height: 50%;
          top: calc(50% - 25%);
        }

       }

     `}</style>
      </div>
    </Wrapper>
  )

}
export default Modal;


