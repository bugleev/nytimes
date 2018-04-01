<div align="center">
<h1>NY Times Archive</h1>
      <img width="700" heigth="400" src="https://bugleev.com/resources/images/nytimes.jpg">
   <br>
  <br>
  <p>
   React application
  </p>
</div>

<h2 align="center">Overview</h2>
This is a web application, that uses NY Times API. With the Article Search API, you can search New York Times articles from Sept. 18, 1851 to today, retrieving headlines, abstracts, lead paragraphs, links to associated multimedia and other article.

<h2 align="center">Stack Used</h2>
This is is made entirely in React js, using [Create React App] (https://github.com/facebook/create-react-app). The [Eject](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) command was used to add some custom components to the project(datepicker, spinner, etc). The core function of the app is to fetch data from NY Times API relevant to a users's query.
<h2 align="center">Styling</h2>
I picked [Styled JSX](https://github.com/zeit/styled-jsx) library to use in the app. It provides dynamic and scoped styling, and overall a very nice experience. The only downside is its usage with Create React App (had to tweak webpack config of CRA).
