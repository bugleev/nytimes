import React, { Component } from "react";
import { form } from './styles'

const news_desk = "Adventure Sports,Arts & Leisure,Arts,Automobiles,Blogs,Books,Booming,Business Day,Business,Cars,Circuits,Classifieds,Connecticut,Crosswords & Games,Culture,DealBook,Dining,Editorial,Education,Energy,Entrepreneurs,Environment,Escapes,Fashion & Style,Fashion,Favorites,Financial,Flight,Food,Foreign,Generations,Giving,Global Home,Health & Fitness,Health,Home & Garden,Home,Jobs,Key,Letters,Long Island,Magazine,Market Place,Media,Men's Health,Metro,Metropolitan,Movies,Museums,National,Nesting,Obits,Obituaries,Obituary,OpEd,Opinion,Outlook,Personal Investing,Personal Tech,Play,Politics,Regionals,Retail,Retirement,Science,Small Business,Society,Sports,Style,Sunday Business,Sunday Review,Sunday Styles,T Magazine,T Style,Technology,Teens,Television,The Arts,The Business of Green,The City Desk,The City,The Marathon,The Millennium,The Natural World,The Upshot,The Weekend,The Year in Pictures,Theater,Then & Now,Thursday Styles,Times Topics,Travel,U.S.,Universal,Upshot,UrbanEye,Vacation,Washington,Wealth,Weather,Week in Review,Week,Weekend,Westchester,Wireless Living,Women's Health,Working,Workplace,World,Your Money".split(",").map(el => el = `"${el}"`);

const section_name = "Arts,Automobiles,Autos,Blogs,Books,Booming,Business,Business Day,Corrections,Crosswords & Games,Crosswords/Games,Dining & Wine,Dining and Wine,Editors' Notes,Education,Fashion & Style,Food,Front Page,Giving,Global Home,Great Homes & Destinations,Great Homes and Destinations,Health,Home & Garden,Home and Garden,International Home,Job Market,Learning,Magazine,Movies,Multimedia,Multimedia/Photos,N.Y. / Region,N.Y./Region,NYRegion,NYT Now,National,New York,New York and Region,Obituaries,Olympics,Open,Opinion,Paid Death Notices,Public Editor,Real Estate,Science,Sports,Style,Sunday Magazine,Sunday Review,T Magazine,T:Style,Technology,The Public Editor,The Upshot,Theater,Times Topics,TimesMachine,Today's Headlines,Topics,Travel,U.S.,Universal,UrbanEye,Washington,Week in Review,World,Your Money".split(",").map(el => el = `"${el}"`);

const type_of_material = "Addendum,An Analysis,An Appraisal,Article,Banner,Biography,Birth Notice,Blog,Brief,Caption,Chronology,Column,Correction,Economic Analysis,Editorial,Editorial Cartoon,Editors' Note,First Chapter,Front Page,Glossary,Interactive Feature,Interactive Graphic,Interview,Letter,List,Marriage Announcement,Military Analysis,News,News Analysis,Newsletter,Obituary,Obituary (Obit),Op-Ed,Paid Death Notice,Postscript,Premium,Question,Quote,Recipe,Review,Schedule,SectionFront,Series,Slideshow,Special Report,Statistics,Summary,Text,Video,Web Log".split(",").map(el => el = `"${el}"`);

const fields = "body,body.search,creative_works,creative_works.contains,day_of_week,document_type,glocations,glocations.contains,headline,headline.search,kicker,kicker.contains,news_desk,news_desk.contains,organizations,organizations.contains,persons,persons.contains,pub_date,pub_year,secpg,source,source.contains,subject,subject.contains,section_name,section_name.contains,type_of_material,type_of_material.contains,web_url,word_count".split(",").map(el => el = `"${el}"`);

const data = {
  news_desk,
  section_name,
  type_of_material,
  fields
};

const FieldSelectionForm = (props) => {

  let fieldType;
  let key;
  for (key in data) {
    if (props.field === key) {
      fieldType = data[key].map((el, ind) => {
        return <option key={ind}>{el}</option>
      }
      )
    }
  }
  return (
    <div className="uk-width-1-2 uk-flex-center" data-uk-grid>
      <fieldset className="uk-fieldset uk-width-1-1 uk-width-1-1@s">
        <label className="uk-form-label" htmlFor="form-s-multiple">{props.field}</label>
        <select className="uk-select" id="form-s-multiple" multiple onChange={props.select}>
          {fieldType}
        </select>
      </fieldset>
    </div>
  )
}
const QueryField = (props) => {
  return (
    <div className="uk-section uk-width-1-1 uk-width-1-2@m query" data-uk-grid>
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
    searchParams: [
      { news_desk: [] },
      { section_name: [] },
      { type_of_material: [] },
      { fields: [] }
    ],
    query: "",
    multiple: false
  }
  handleSelect = (event, fieldName) => {
    const selectedFields = Array.from(event.target.selectedOptions).map(el => {
      let key;
      for (key in data) {
        if (key === fieldName) return data[key][el.index]
      }
    })

    const newSearchParams = [...this.state.searchParams].map(element => {
      if (Object.keys(element)[0] === fieldName) {
        element[fieldName] = selectedFields;
        return element;
      }
      return element;
    });
    this.setState({
      searchParams: newSearchParams,
    })
    let firstQuery = "&fq=";
    let newQuery = "";
    this.state.searchParams.forEach(el => {
      let key;
      for (key in el) {
        if (el[key].length && !this.state.multiple) {
          firstQuery += `${key}:(${el[key].join(" ")})`;
          this.setState({
            multiple: true,
          })
        }
        if (el[key].length && this.state.multiple) {
          newQuery += ` AND ${key}:(${el[key].join(" ")})`;
        }
      }
    })

    this.setState({
      query: firstQuery + newQuery.slice(5)
    })
    console.log(selectedFields);
    console.log(this.state.query);


  }


  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="uk-width-4-5@m uk-width-1-1@s uk-flex-center wrapper" data-uk-grid>
        <hr className="uk-width-1-1" />
        <div className="uk-width-1-1 uk-flex-center" data-uk-grid>
          <p className="uk-width-1-1 uk-text-center">Set up a time interval for the search:</p>
          <fieldset className="uk-fieldset uk-width-1-1 uk-width-1-4@s">
            <label className="uk-form-label" htmlFor="form-s-date">From:</label>
            <input className="uk-input" id="form-s-date" type="date" placeholder="1970-01-01" />
          </fieldset>
          <fieldset className="uk-fieldset uk-width-1-1 uk-width-1-4@s">
            <label className="uk-form-label" htmlFor="form-s-date">To:</label>
            <input className="uk-input" id="form-s-date" type="date" placeholder="1970-01-01" />
          </fieldset>
        </div>
        {this.state.searchParams.map((param, index) => {
          return <FieldSelectionForm
            select={(event, fieldName) => this.handleSelect(event, Object.keys(param)[0])}
            field={Object.keys(param)[0]}
            key={index}
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