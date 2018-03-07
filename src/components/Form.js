import React from "react";

const Form = (props) => {
  return (
    <form>
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Legend</legend>
        <input class="uk-input uk-form-width-large" type="text" placeholder="Large" />
      </fieldset>
    </form>
  )
}

export default Form;