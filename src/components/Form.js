import React from "react";
import { legend__text, form } from './styles'

const Form = (props) => {
  return (
    <form className="uk-width-4-5@m uk-width-1-1@s uk-flex-center wrapper" data-uk-grid>
      <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s">
        <label className="uk-form-label" htmlFor="form-s-date">From:</label>
        <input className="uk-input" id="form-s-date" type="date" placeholder="1970-01-01" />
      </fieldset>
      <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s">
        <label className="uk-form-label" htmlFor="form-s-date">To:</label>
        <input className="uk-input" id="form-s-date" type="date" placeholder="1970-01-01" />
      </fieldset>
      <fieldset className="uk-fieldset uk-width-1-1">
        <legend className="uk-legend">Search Query</legend>
        <input className="uk-input" type="text" placeholder="Enter a keyword" />
      </fieldset>
      <button className="uk-button uk-button-primary" type="button">Submit</button>
      <style jsx>{legend__text}</style>
      <style jsx>{form}</style>
    </form>
  )
}

export default Form;