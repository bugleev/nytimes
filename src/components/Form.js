import React, { Component } from 'react';
import { form } from './styles';
import data from "../assets/data";
import DatePicker from 'react-date-picker';


class FieldSelectionForm extends Component {

  render() {
    let fieldType;
    let key;
    for (key in data) {
      if (this.props.field === key) {
        fieldType = data[key].map((el, ind) => {
          return <option key={ind}>{el}</option>
        })
      }
    }
    return (
      <div className="uk-width-1-2@s uk-flex-center" data-uk-grid>
        <fieldset className="uk-fieldset uk-width-1-1 uk-width-1-1@s">
          <label className="uk-form-label" htmlFor="form-s-multiple">{this.props.field}</label><span className="uk-article-meta clear" onClick={this.props.onClear}>clear</span>
          <select defaultValue={[]} className="uk-select" id="form-s-multiple" multiple onChange={this.props.select}>
            {fieldType}
          </select>
        </fieldset>
        <style jsx>{form}</style>
      </div>
    )

  }
}

const QueryField = (props) => {

  return (
    <div className="uk-section uk-width-1-1 uk-width-2-3@m query" data-uk-grid>
      <p className="uk-width-1-1 uk-text-center">Check your search query here:</p>
      <pre>
        <code>{props.value}
        </code>
      </pre>
      <style jsx>{form}</style>
    </div>
  )
}

class Form extends Component {

  state = {
    beginDate: new Date("2017-01-01"),
    endDate: new Date(),
    searchParams: [
      { news_desk: [] },
      { section_name: [] },
      { type_of_material: [] }
    ],
    query: "",
    multipleQuery: false
  }

  beginDateChange = date => {
    this.setState({ beginDate: date })
    this.updateDateQuery("beginDate");
  }


  endDateChange = date => this.setState({ endDate: date })
  handleClearButton = (event, fieldName) => {

    let element = event.target.classList;
    let selectedParams = event.target.nextSibling.selectedOptions;
    event.target.classList.add("pressed");
    setTimeout(() => {
      element.remove("pressed");
    }, 100)
    let newSearchParams = [...this.state.searchParams].map(element => {
      if (Object.keys(element)[0] === fieldName) {
        element[fieldName] = [];
        return element;
      }
      return element;
    });
    for (let i = 0; i < selectedParams.length; i++) {
      selectedParams[i].selected = false;
    }

    this.setState({
      searchParams: newSearchParams,
    })
    this.updateParamsQuery();

    // clearing for the second time because of the default selection appearing for some reason after first clear
    for (let i = 0; i < selectedParams.length; i++) {
      selectedParams[i].selected = false;
    }
  }

  updateParamsQuery = () => {

    let checkParams = 0;
    let firstQuery = "";
    let restQuery = "";
    this.state.searchParams.forEach(el => {
      let key;
      for (key in el) {
        checkParams += el[key].length;
        if (el[key].length && !this.state.multipleQuery) {
          firstQuery += `${key}:(${el[key].join(" ")})`;
          this.setState({
            multipleQuery: true,
          })
        }
        if (el[key].length && this.state.multipleQuery) {
          restQuery += ` AND ${key}:(${el[key].join(" ")})`;
        }
      }
    })
    let preQuery = checkParams ? "&fq=" : "";
    this.setState({
      query: preQuery + firstQuery + restQuery.slice(5)
    })
  }

  updateDateQuery = (dateType) => {
    let key
    for (key in this.state) {
      if (key === dateType) {
        let month = (this.state[key].getMonth() + 1);
        month = (month < 10) ? ("0" + month.toString()) : month.toString();
        let day = this.state[key].getDate();
        day = (day < 10) ? ("0" + day.toString()) : day.toString();
        const newDate = `${this.state[key].getFullYear()}${month}${day}`;
        console.log(newDate);
      }
    }


  }

  handleSelect = (event, fieldName) => {

    let selectedFields = Array.from(event.target.selectedOptions).map(el => {
      let key;
      for (key in data) {
        if (key === fieldName) return `"${data[key][el.index]}"`
      }
    })
    let newSearchParams = [...this.state.searchParams].map(element => {
      if (Object.keys(element)[0] === fieldName) {
        element[fieldName] = selectedFields;
        return element;
      }
      return element;
    });
    this.setState({
      searchParams: newSearchParams,
    })
    this.updateParamsQuery();
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="uk-width-4-5@m uk-width-1-1@s uk-flex-center wrapper" data-uk-grid>
        <hr className="uk-width-1-1" />
        <div className="uk-width-1-1 uk-flex-center" data-uk-grid>
          <p className="uk-width-1-1 uk-text-center">Set up a time interval for the search:</p>
          <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s datepicker">
            <DatePicker onChange={this.beginDateChange} value={this.state.beginDate} />
          </fieldset>
          <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s datepicker">
            <DatePicker onChange={this.endDateChange} value={this.state.endDate} />
          </fieldset>
        </div>
        {this.state.searchParams.map((param, index) => {
          return <FieldSelectionForm
            select={(event, fieldName) => this.handleSelect(event, Object.keys(param)[0])}
            field={Object.keys(param)[0]}
            key={index}
            onClear={(event, fieldName) => this.handleClearButton(event, Object.keys(param)[0])}
          />
        })}
        <QueryField value={this.state.query} />
        <fieldset className="uk-fieldset uk-width-1-1">
          <legend className="uk-legend">Search Query</legend>
          <input className="uk-input" type="text" placeholder="Enter a keyword" onChange={this.props.onChange} value={this.props.value} />
        </fieldset>
        <input className="uk-button uk-button-primary" type="submit" />
        <style jsx>{form}</style>
      </form>
    )
  }
}

export default Form;