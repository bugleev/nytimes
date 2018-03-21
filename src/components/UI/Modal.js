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
    let article = this.props.article;
    let image;
    let pub_date;
    if (article) {
      image = article.multimedia.length ? `https://static01.nyt.com/${article.multimedia[1].url}` : "";
      pub_date = new Date(article.pub_date);
      pub_date = `${pub_date.getFullYear()}\\${pub_date.getMonth() + 1}\\${pub_date.getDate()}`;
    }

    return (
      <Wrapper>
        <Backdrop
          show={this.props.show}
          click={() => { this.props.backdropClick(); this.setState({ class: "", opacity: 0 }) }}
        />
        <div className={`modal uk-card uk-card-default uk-card-body ${this.state.class}`}>
          <button className="uk-modal-close-outside uk-close uk-icon" type="button" data-uk-close="" onClick={() => { this.props.backdropClick(); this.setState({ class: "", opacity: 0 }) }}>
          </button>
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-card-badge uk-label">{article ? article.type_of_material : ''}</div>
            <div className="uk-card-badge uk-label">{article ? article.document_type : ''}</div>
            <div className="uk-card-badge uk-label">{(article && article.new_desk && article.new_desk.toLowerCase() !== 'none') ? article.new_desk : ''}</div>
            <div className="uk-width-1-1 title-grid" data-uk-grid>
              <div className="img-wrapper uk-width-1-3@s">
                <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="placeholder" />
                <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >
                </div>
              </div>
              <div className="uk-width-1-3@s">
                <h3 className="uk-card-title uk-margin-remove-bottom">{article ? article.source : 'blank'}</h3>
                <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date || 'blank'}</time></p>
                <p className="uk-text-meta uk-margin-remove-top">{(article && article.byline) ? article.byline.original : ''}</p>
              </div>

            </div>
            <hr />
            <div className="body-left uk-width-1-1 uk-flex-start uk-text-left">
              <p>Headline: </p><span className="headline">"{(article && article.headline) ? article.headline.main : '_blank'}"</span>
              <br />
              <p>Snippet: </p><span>"{article ? article.snippet : '_blank'}"</span>
              <br />
              <p>Kicker: </p><span>{(article && article.headline) ? article.headline.kicker : ''}</span>
              <br />
              <p>URL: </p><a href={article ? article.web_url : ''} className="modal-url">{article ? article.web_url : ''}</a>
              <br />
              <p>Keywords:</p> {(article && article.keywords.length) ? article.keywords.map((el, ind) => (<div className="keyword" key={ind}>{el.value}</div>)) : ''}
            </div>

          </div>
          <div className="uk-card-footer uk-text-center">
            <a href={article ? article.web_url : ''} target="_blank" className="uk-button uk-button-primary">Go to Article</a>
          </div>


          <style jsx>{modal}</style>
          <style jsx>{`
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
              transition: width 0.4s ease-in, left 0.4s ease-in,height 0.4s ease-in,top 0.4s ease-in,box-shadow 0.4s ease-in,  opacity ${this.state.opacity ? '0.8' : '0.5'}s ease-out;
            
            }
            .modal.open{
              width: 80%;
              left: calc(50% - 40%);
              height: auto;
              top: calc(50% - 30%);
            
              box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
              padding: 16px;
              border-radius: 3px;
            }
            .uk-card-footer > a,
            .keyword{
              opacity: ${this.state.opacity};
              transition: opacity ${this.state.opacity ? '0.8' : '0'}s ease-out;    

            }
            @media only screen and (max-width: 480px) {
              .modal.open{
                width: 95%;
                height: 90%;
                padding-top: 25px;
                overflow-y: scroll;
                left: calc(50% - 47.5%);
                top: calc(50% - 45%);
            }
            
          }
          `}</style>
        </div>
      </Wrapper>
    )
  }
}
export default Modal;


