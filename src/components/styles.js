import css from 'styled-jsx/css'
import img from './newspaper.jpg';
export default css`
.main{
  background-image: url(${img});
  background-size: contain;
  padding-bottom: 1rem;
  
}
.results{
  background-color: antiquewhite;
  box-shadow: 1px 5px 20px #555;
  margin: 0 auto 1rem auto;
}
@media only screen and (max-width: 959px) {
  .results{
   width: 95%;
  }
}
.header{
  height: 150px;
  margin: 0 auto;

}


`
export const form = css`
form{
   margin: 0 auto;
   padding-top: 2rem;
}
fieldset{
  padding-left: 0;
}
@media only screen and (min-width: 529px) {
  form > fieldset:first-child{
    padding-right: 1rem;
  }
}


`
export const legend__text = css`
  .uk-legend{
    
  }
  @media only screen and (max-width: 600px) {
    .uk-legend{
   
    }
  }
}`




