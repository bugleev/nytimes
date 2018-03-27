import React, { PureComponent } from 'react';
import placeholder from '../placeholder_600.jpg';
import { modal } from '../styles';
import Wrapper from '../../hoc/Wrapper';
import Backdrop from './Backdrop';

const Modal = (props) => {
  const children = React.Children
    .map(props.children, child =>
      React.cloneElement(child, { article: props.article })
    );
  return (
    <div className={`modal uk-card uk-card-default uk-grid-small uk-card-body ${props.class}`} data-uk-grid>
      <button className="uk-modal-close-outside uk-close uk-icon" type="button" data-uk-close="" onClick={props.closeButton}>
      </button>
      {children}
      <style jsx>{modal}</style>
      <style jsx>{`
      .modal{
        position: fixed;
        z-index: 1000;
        opacity: ${props.opacity};
        background-color: #fff;
        width:  ${props.coords.width}px;
        left: ${props.coords.left}px;
        height: ${props.coords.height}px;
        top:  ${props.coords.top}px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        transition: width 0.25s ease-in, left 0.25s ease-in,height 0.25s ease-in,top 0.25s ease-in,box-shadow 0.25s ease-in,  opacity ${props.opacity ? '0.6' : '0.3'}s ease-out;
      }
      .modal.open{
        width: 80%;
        left: calc(50% - 40%);
        height: auto;
        top: calc(50% - 30%);
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        padding: 16px;
        border-radius: 3px;
        margin: 0 auto;
      
      }
      @media only screen and (max-width: 480px) {
        .modal.open{
          width: 95%;
          max-height: 90%;
          padding-top: 25px;
          overflow-y: scroll;
          overflow-x: hidden;
          left: calc(50% - 47.5%);
          top: calc(50% - 45%);
        }
      }
    `}</style>
    </div>
  )
}

const ModalLabels = (props) => {
  const article = props.article;
  return (
    <Wrapper>
      <div className="uk-card-badge uk-label">{article.type_of_material || ''}</div>
      <div className="uk-card-badge uk-label">{article.document_type || ''}</div>
      <div className="uk-card-badge uk-label">{(article.new_desk && article.new_desk.toLowerCase() !== 'none') ? article.new_desk : ''}</div>
      <style jsx>{modal}</style>
    </Wrapper>
  )
}
const ModalHeader = (props) => {
  const article = props.article;
  const image = article.multimedia.length ? `https://static01.nyt.com/${article.multimedia[0].url}` : "";
  let pub_date = new Date(article.pub_date);
  pub_date = `${pub_date.getFullYear()}\\${pub_date.getMonth() + 1}\\${pub_date.getDate()}`;
  return (
    <Wrapper>
      <div className="uk-width-1-1 title-grid" data-uk-grid>
        <div className="img-wrapper">
          <img className="uk-border-rounded" width="100" height="80" src={image || placeholder} alt="placeholder" />
          <div className="colored-shadow" style={{ backgroundImage: `url(${image || placeholder})` }} >
          </div>
        </div>
        <div className="uk-width-2-3@s">
          <h3 className="uk-card-title uk-margin-remove-bottom">{article.source || 'blank'}</h3>
          <p className="uk-text-meta uk-margin-remove-top"><time dateTime="">{pub_date || 'blank'}</time></p>
          <p className="uk-text-meta uk-margin-remove-top">{article.byline ? article.byline.original : ''}</p>
        </div>
      </div>
      <hr />
      <style jsx>{modal}</style>
    </Wrapper>
  )
}
const ModalBody = (props) => {
  const article = props.article;
  const headline = article.headline.main.length > 200 ? (article.headline.main.slice(0, 200) + '...') : article.headline.main;
  return (
    <div className="body-left uk-width-1-1 uk-flex-start uk-text-left">
      <p>Headline: </p><span className="headline">"{headline || '_blank'}"</span>
      <br />
      <p>Snippet: </p><span>"{article.snippet || '_blank'}"</span>
      <br />
      <p>Kicker: </p><span>{article.headline ? article.headline.kicker : ''}</span>
      <br />
      <p>URL: </p><a href={article.web_url || ''} target="_blank" className="modal-url">{article.web_url || ''}</a>
      <br />
      <p>Keywords:</p> {article.keywords.length ? article.keywords.map((el, ind) => (<div className="keyword" key={ind}>{el.value}</div>)) : ''}
      <style jsx>{modal}</style>
      <style jsx>{`
        .uk-card-footer > a,
        .keyword{
          opacity: ${props.opacity};
          transition: opacity ${props.opacity ? '0.6' : '0'}s ease-out;    
        }
      `}</style>
    </div>
  )
}
const ModalFooter = (props) => (
  <div className="uk-card-footer uk-text-center">
    <a href={props.article.web_url || ''} target="_blank" className="uk-button uk-button-primary">Go to Article</a>
    <style jsx>{modal}</style>
    <style jsx>{`
      .uk-card-footer > a,
      .keyword{
        opacity: ${props.opacity};
        transition: opacity ${props.opacity ? '0.6' : '0'}s ease-out;    
      }
    `}</style>
  </div>
)

class ModalElement extends PureComponent {
  state = {
    class: "",
    opacity: 0
  }
  componentDidMount() {
    setTimeout(() => this.setState({ class: "open", opacity: 1 }), 50)
  }
  handleModalRemove = () => {
    this.props.backdropClick();
    this.setState({ class: "", opacity: 0 });
  }
  render() {
    return (
      <Wrapper>
        <Backdrop
          show={this.props.show}
          click={this.handleModalRemove}
        />
        <Modal
          article={this.props.article}
          opacity={this.state.opacity}
          coords={this.props.coords}
          class={this.state.class}
          closeButton={this.handleModalRemove}
        >
          <ModalLabels />
          <ModalHeader />
          <ModalBody opacity={this.state.opacity} />
          <ModalFooter opacity={this.state.opacity} />
        </Modal>
      </Wrapper>
    )
  }
}
export default ModalElement;


