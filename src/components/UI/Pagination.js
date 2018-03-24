import React, { PureComponent } from 'react';

const Pagination = (props) => {

  console.log(props.pages);
  return (
    <div>
      <ul className="uk-pagination uk-text-center uk-flex-center">
        <li style={{ visibility: `${props.pages.current !== 1 ? 'visible' : 'hidden'}` }}><a href="" onClick={(event) => props.handleClick(event)}><span className="uk-margin-small-right" data-uk-pagination-previous></span> Previous</a></li>
        <span >Page {props.pages.current} of {props.pages.overall || 100}</span>
        <li style={{ visibility: `${props.pages.current !== props.pages.overall ? 'visible' : 'hidden'}` }}><a href="" onClick={(event) => props.handleClick(event, "add one")} >Next <span className="uk-margin-small-left" data-uk-pagination-next></span></a></li>
      </ul>
      <style jsx>{`
        span{
          margin: 0 auto;
          padding: 0;
        }
      `}</style>
    </div>

  )
}
export default Pagination;