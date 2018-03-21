import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import { form } from './styles';
import data from "../assets/data";


const SearchParamsField = (props) => {
  return (
    <div className="uk-width-1-2@s uk-flex-center" data-uk-grid>
      <fieldset className="uk-fieldset uk-width-1-1 uk-width-1-1@s">
        <label className="uk-form-label" htmlFor="form-s-multiple">{props.field}</label><span className="uk-article-meta clear" onClick={props.onClear}>clear</span>
        <select defaultValue={[]} className="uk-select" id="form-s-multiple" multiple onChange={props.select}>
          {data[props.field].map((el, ind) => <option key={ind}>{el}</option>)}
        </select>
      </fieldset>
      <style jsx>{form}</style>
    </div>
  )
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
  componentDidMount() {
    this.updateParamsQuery();
  }
  state = {
    user_input: "",
    begin_date: "",
    end_date: new Date(),
    searchParams: [
      { news_desk: [] },
      { section_name: [] },
      { type_of_material: [] }
    ],
    query: "",
    multipleQuery: false
  }

  sendQueryToParent = () => this.props.query(this.state.query)

  handleClearButton = (event, fieldName) => {

    let element = event.target.classList;
    let selectedParams = event.target.nextSibling.selectedOptions;
    event.target.classList.add("pressed");
    setTimeout(() => {
      element.remove("pressed");
    }, 100)

    let newSearchParams = [...this.state.searchParams].map((element, index) => {
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

    // clearing selection for the second time because of the default selection appearing for some reason after first clear
    for (let i = 0; i < selectedParams.length; i++) {
      selectedParams[i].selected = false;
    }
  }
  handleUserInput = (event) => {
    this.setState({ user_input: event.target.value }, () => {
      // this.updateParamsQuery();
    });
  }
  handleDateChange = (date, dateType) => {
    if (dateType === "end_date" && date < this.state.begin_date) {
      this.setState({ begin_date: new Date(date - 3.154e+10), end_date: date }, () => {
        this.updateParamsQuery();
      });
    }
    this.setState({ [dateType]: date }, () => {
      this.updateParamsQuery();
    });
  }
  handleSelect = (event, fieldName) => {

    let selectedFields = Array
      .from(event.target.selectedOptions)
      .map(el => `"${data[fieldName][el.index]}"`);
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
  getDateQuery = () => {
    let newDate = [];
    for (let key in this.state) {
      if (key === "begin_date" || key === "end_date") {
        if (this.state[key]) {
          let month = (this.state[key].getMonth() + 1);
          month = (month < 10) ? ("0" + month.toString()) : month.toString();
          let day = this.state[key].getDate();
          day = (day < 10) ? ("0" + day.toString()) : day.toString();
          newDate.push(`&${key}=${this.state[key].getFullYear()}${month}${day}`);
        } else {
          newDate.push("");
        }
      }
    }
    return newDate;
  }

  updateParamsQuery = () => {
    let checkParams = 0;
    let firstQuery = "";
    let restQuery = "";
    this.state.searchParams.forEach(el => {
      for (let key in el) {
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
    const userQuery = this.state.user_input ? `&q=${this.state.user_input}` : "";
    const dateQuery = this.getDateQuery();
    const preQuery = checkParams ? "&fq=" : "";

    this.setState({
      query: userQuery + dateQuery[0] + dateQuery[1] + preQuery + firstQuery + restQuery.slice(5)
    }, () => {
      this.sendQueryToParent();
    });
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="uk-width-4-5@m uk-width-1-1@s uk-flex-center wrapper" data-uk-grid>
        <hr className="uk-width-1-1" />
        <div className="uk-width-1-1 uk-flex-center" data-uk-grid>
          <p className="uk-width-1-1 uk-text-center">Set up a time interval for the search:</p>
          <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s datepicker">
            <DatePicker
              onChange={(event, fieldName) => this.handleDateChange(event, "begin_date")}
              value={this.state.begin_date} maxDate={this.state.end_date}
            />
          </fieldset>
          <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s datepicker">
            <DatePicker
              onChange={(event, fieldName) => this.handleDateChange(event, "end_date")}
              value={this.state.end_date} maxDate={new Date()}
            />
          </fieldset>
        </div>
        {this.state.searchParams.map((param, index) => {
          return <SearchParamsField
            select={(event, fieldName) => this.handleSelect(event, Object.keys(param)[0])}
            field={Object.keys(param)[0]}
            key={index}
            onClear={(event, fieldName) => this.handleClearButton(event, Object.keys(param)[0])}
          />
        })}
        <QueryField value={this.state.query} />
        <fieldset className="uk-fieldset uk-width-1-1">
          <legend className="uk-legend">Search Query</legend>
          <input className="uk-input" id="queryInput" type="text" placeholder="Enter a keyword" onChange={this.handleUserInput} />
        </fieldset>
        <input className="uk-button uk-button-primary" type="submit" />
        <style jsx>{form}</style>
      </form>
    )
  }
}

export default Form;