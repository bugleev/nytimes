import React, { PureComponent } from 'react';
import DatePicker from 'react-date-picker';
import { form } from './styles';
import data from "../assets/data";
import Wrapper from '../hoc/Wrapper';

const UserInputField = (props) => (
  <fieldset className="uk-fieldset uk-width-1-1 uk-text-center">
    <p className="uk-width-1-1 label-text">3. Enter search query term:</p>
    {/* <p className="uk-width-1-1 uk-text-center">Search is performed on the article body, headline and byline:</p> */}
    <input className="uk-input" id="queryInput" type="text" placeholder="Enter a keyword" onChange={props.handleUserInput} />
    <style jsx>{form}</style>
  </fieldset>
)
const DateFields = (props) => (
  <Wrapper>
    <hr className="uk-width-1-1" />
    <div className="uk-width-1-1 uk-flex-center uk-text-center" data-uk-grid>
      <span className="uk-width-1-1 label-text">1. Set up a time interval for the search:</span>
      <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s datepicker">
        {props.children[0]}
      </fieldset>
      <fieldset className="uk-fieldset uk-width-1-2 uk-width-1-4@s datepicker">
        {props.children[1]}
      </fieldset>
      <p className="uk-width-1-1 label-text">2. Add search parameters(optional):</p>
    </div>
    <style jsx>{form}</style>
  </Wrapper>
)
const SearchParamsField = (props) => {
  const labelName = props.field
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="uk-width-1-2@s uk-flex-center" data-uk-grid>
      <fieldset className="uk-fieldset uk-width-1-1 uk-width-1-1@s">
        <label className="uk-form-label" htmlFor="form-s-multiple">{labelName}</label><span className="uk-article-meta clear" onClick={props.onClear}>clear</span>
        <select defaultValue={[]} className="uk-select" id="form-s-multiple" multiple onChange={props.select} style={{}}>
          {data[props.field].map((el, ind) => <option key={ind}>{el}</option>)}
        </select>
      </fieldset>
      <style jsx>{form}</style>
    </div>
  )
}
const SortSelectionField = (props) => {
  return (
    <div className="uk-width-1-2@s uk-flex-center" data-uk-grid>
      <fieldset className="uk-fieldset uk-width-1-1 uk-width-1-1@s">
        <label className="uk-form-label" htmlFor="form-s-select">Sort results by:</label>
        <select className="uk-select" id="form-s-select" onChange={props.select}>
          <option>newest</option>
          <option>oldest</option>
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

class Form extends PureComponent {
  componentWillMount() {
    const newQuery = this.updateParamsQuery();
    this.setState({
      query: newQuery.join('')
    })
  }
  state = {
    user_input: "",
    begin_date: new Date(1851, 8, 18),
    end_date: new Date(),
    searchParams: [
      { news_desk: [] },
      { section_name: [] },
      { type_of_material: [] }
    ],
    sortType: "newest",
    query: "",
    multipleQuery: false
  }

  handleClearButton = (event, fieldName) => {
    event.target.classList.add("pressed");
    setTimeout(() => {
      element.remove("pressed");
    }, 100)
    let element = event.target.classList;
    let selectedParams = event.target.nextSibling.selectedOptions;
    if (!selectedParams.length) return;
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
    const query = this.updateParamsQuery(newSearchParams);
    this.setState({
      searchParams: newSearchParams, query: query.join('')
    })
    // clearing selection for the second time because of the default selection appearing for some reason after first clear
    for (let i = 0; i < selectedParams.length; i++) {
      selectedParams[i].selected = false;
    }
  }

  handleUserInput = (event) => {
    let query = this.updateParamsQuery();
    query[0] = event.target.value ? `&q=${event.target.value}` : "";
    this.setState({ user_input: event.target.value, query: query.join('') });
  }

  handleDateChange = (date, dateType) => {
    let query = this.updateParamsQuery();
    if (dateType === "end_date" && date < this.state.begin_date) {
      const newDate = { begin_date: new Date(date - 3.154e+10), end_date: date };
      const newQuery = this.getDateQuery(newDate);
      query[1, 2] = newQuery[0, 1];
      this.setState({ begin_date: new Date(date - 3.154e+10), end_date: date, query: query.join('') });
    }
    const newDate = { [dateType]: date };
    const newQuery = this.getDateQuery(newDate);
    (dateType === "end_date") ? query[2] = newQuery[0] : query[1] = newQuery[0];
    this.setState({ [dateType]: date, query: query.join('') });
  }

  handleSortParam = (event) => {
    event.preventDefault();
    let query = this.updateParamsQuery();
    query[6] = `&sort=${event.target.selectedOptions[0].innerText}`
    this.setState({
      sortType: event.target.selectedOptions[0].innerText, query: query.join('')
    })
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
    const query = this.updateParamsQuery(newSearchParams);
    this.setState({
      searchParams: newSearchParams, query: query.join('')
    })
  }

  getDateQuery = (obj) => {
    let newDate = [];
    const dateObject = obj || this.state;
    for (let key in dateObject) {
      if (key === "begin_date" || key === "end_date") {
        if (dateObject[key]) {
          let month = (dateObject[key].getMonth() + 1);
          month = (month < 10) ? ("0" + month.toString()) : month.toString();
          let day = dateObject[key].getDate();
          day = (day < 10) ? ("0" + day.toString()) : day.toString();
          newDate.push(`&${key}=${dateObject[key].getFullYear()}${month}${day}`);
        } else {
          newDate.push("");
        }
      }
    }
    return newDate;
  }

  updateParamsQuery = (obj) => {
    let checkParams = 0;
    let firstQuery = "";
    let restQuery = "";
    const paramsObject = obj || this.state.searchParams
    paramsObject.forEach(el => {
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
    const sortType = `&sort=${this.state.sortType}`;
    const query = [userQuery, dateQuery[0], dateQuery[1], preQuery, firstQuery, restQuery.slice(5), sortType];
    return query;
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.props.onSubmit(event, this.state.query, this.instance.getBoundingClientRect())
        }}
        className="uk-width-4-5@m uk-width-1-1@s uk-flex-center wrapper"
        data-uk-grid
      >
        <DateFields>
          <DatePicker
            onChange={(event, fieldName) => this.handleDateChange(event, "begin_date")}
            value={this.state.begin_date}
            maxDate={this.state.end_date}
          />
          <DatePicker
            onChange={(event, fieldName) => this.handleDateChange(event, "end_date")}
            value={this.state.end_date}
            maxDate={new Date()}
          />
        </DateFields>
        {this.state.searchParams.map((param, index) =>
          <SearchParamsField
            select={(event, fieldName) => this.handleSelect(event, Object.keys(param)[0])}
            field={Object.keys(param)[0]}
            key={index}
            onClear={(event, fieldName) => this.handleClearButton(event, Object.keys(param)[0])}
          />
        )}
        <SortSelectionField select={(event) => this.handleSortParam(event)} />
        <UserInputField handleUserInput={this.handleUserInput} />
        <QueryField value={this.state.query} />
        <div className="uk-width-1-1 uk-text-center">
          <button
            ref={(el) => this.instance = el}
            style={{ paddingLeft: "30px" }}
            className="uk-button uk-button-primary">Get articles
          </button>
        </div>
        <style jsx>{form}</style>
      </form>
    )
  }
}

export default Form;