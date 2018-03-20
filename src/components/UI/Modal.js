import React, { Component } from 'react';
import placeholder from '../placeholder_600.jpg';
import { modal } from '../styles';
import Wrapper from '../../hoc/Wrapper';
import Backdrop from './Backdrop';


class Modal extends Component {
  state = {
    class: "",
    opacity: 0
  }

  componentDidMount() {
    this.setState({ class: "open", opacity: 1 });
  }

  render() {
    let image,
      pub_date;
    if (this.props.article) {
      image = this.props.article.multimedia.length ? `https://static01.nyt.com/${this.props.article.multimedia[0].url}`
        : "";
      pub_date = new Date(this.props.article.pub_date);
      pub_date = `${pub_date.getFullYear()}\\${pub_date.getMonth() + 1}\\${pub_date.getDate()}`;
    }

    return (
      <Wrapper>
        <Backdrop
          show={this.props.show}
          click={() => { this.props.backdropClick(); this.setState({ class: "", opacity: 0 }) }}
        />
        <div className={`modal uk-card uk-card-default uk-card-body ${this.state.class}`}>
          <button className="uk-modal-close-outside uk-close uk-icon" type="button" uk-close="" onClick={() => { this.props.backdropClick(); this.setState({ class: "", opacity: 0 }) }}>
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" ratio="1" >
            </svg>
          </button>
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-card-badge uk-label">{this.props.article ? this.props.article.type_of_material : 'blank'}</div>
            <div className="uk-card-badge uk-label">{this.props.article ? this.props.article.document_type : 'blank'}</div>
            <div className="uk-width-1-1" data-uk-grid>
              <div className="img-wrapper uk-width-1-3@s">
                <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="placeholder" />
                <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >
                </div>
              </div>
              <div className="uk-width-1-3@s">
                <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.article ? this.props.article.source : 'blank'}</h3>
                <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date || 'blank'}</time></p>
                <p className="uk-text-meta uk-margin-remove-top">{(this.props.article && this.props.article.byline) ? this.props.article.byline.original : ''}</p>
              </div>

            </div>
            <hr />
            <div className="body-left uk-width-3-4 uk-flex-start uk-text-left">
              <p>Headline: <span className="headline">{(this.props.article && this.props.article.headline) ? this.props.article.headline.main : '_blank'}</span></p>
              <p>Kicker: <span>{(this.props.article && this.props.article.headline) ? this.props.article.headline.kicker : '_blank'}</span></p>
              <p>Snipet: <span>{this.props.article ? this.props.article.snippet : '_blank'}</span></p>
              <p>URL: <a href={this.props.article ? this.props.article.web_url : ''}>{this.props.article ? this.props.article.web_url : '_blank'}</a></p>

            </div>
            <div className="body-right uk-width-1-4 uk-text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo dolorum laboriosam nulla tenetur optio enim temporibus laborum reprehenderit saepe. In nam sed, quis sequi labore officia dicta est incidunt.

            </div>
          </div>
          <div className="uk-card-footer uk-text-center">
            <a href="" className="uk-button uk-button-primary">Go to Article</a>
          </div>


          <style jsx>{modal}</style>
          <style jsx>{`
            .uk-grid-small{
              

            }
            .body-left{
             
             
            }
            .body-right{
              
            }
            .modal{
              position: fixed;
              z-index: 1000;
              opacity: ${this.state.opacity};
              background-color: #fff;
              width:  ${this.props.coords.width}px;
              left: ${this.props.coords.left}px;
              height: ${this.props.coords.height}px;
              top:  ${this.props.coords.top}px;
              border: 1px solid #ccc;
              box-sizing: border-box;
              transition: width 0.25s ease-in, left 0.25s ease-in,height 0.25s ease-in,top 0.25s ease-in,box-shadow 0.25s ease-in,  opacity ${this.state.opacity ? '0.6' : '0.3'}s ease-out;
            
            }
            .modal.open{
              width: 80%;
              left: calc(50% - 40%);
              height: 60%;
              top: calc(50% - 30%);
              box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
              padding: 16px;
              

            }
            /*@media (min-width: 1200px){
              .modal{
              width: 50%;
              left: calc(50% - 25%);
              height: 50%;
              top: calc(50% - 25%);
              }

            }*/
         
          `}</style>
        </div>
      </Wrapper>
    )
  }
}
export default Modal;


