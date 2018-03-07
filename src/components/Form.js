import React from "react";
import styles from './styles'

const Form = (props) => {
  return (
    <form>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Legend</legend>
        <input className="uk-input uk-form-width-large" type="text" placeholder="Large" />
      </fieldset>
      <style jsx>{styles}</style>
    </form>
  )
}

export default Form;