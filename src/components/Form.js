import React from "react";
import { legend__text, form } from './styles'

const Form = (props) => {
  return (
    <form className="uk-width-2-3@m uk-width-1-1@s uk-flex-center wrapper" data-uk-grid>
      <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s">
        <label className="uk-form-label" for="form-s-date">Date</label>
        <input className="uk-input" id="form-s-date" type="date" placeholder="1970-01-01" />
      </fieldset>
      <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s">
        <label className="uk-form-label" for="form-s-date">Date</label>
        <input className="uk-input" id="form-s-date" type="date" placeholder="1970-01-01" />
      </fieldset>
      <fieldset className="uk-fieldset uk-width-1-1">
        <legend className="uk-legend">Legend</legend>
        <input className="uk-input" type="text" placeholder="Large" />
      </fieldset>
      <style jsx>{legend__text}</style>
      <style jsx>{form}</style>
    </form>
  )
}

export default Form;