import React from "react";
import { legend__text, form } from './styles'

const Form = (props) => {
  return (
    <form className="uk-width-2-3@m uk-width-1-1@s uk-text-center wrapper">
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Legend</legend>
        <input className="uk-input" type="text" placeholder="Large" />
      </fieldset>
      <style jsx>{legend__text}</style>
      <style jsx>{form}</style>
    </form>
  )
}

export default Form;