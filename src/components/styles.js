import css from 'styled-jsx/css'
import img from './newspaper.jpg';
import font__header from '../cheltenham-italic-700.woff';
import font__main from '../cheltenham-normal-400.woff';
import font__franklin from '../nyt-franklin-500-normal.woff';


export default css`
/*****BOX SHADOWS ******/
/*
.BoxShadowHelper(@level: 1){
    & when (@level = 1) {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    & when (@level = 2) {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    & when (@level = 3) {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    & when (@level = 4) {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    & when (@level = 5) {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
}
*/


.main{
  background-image: url(${img});
  background-size: contain;
  padding-bottom: 1rem;
  
  /* border: 1px solid #d9d9d9;
  transition: box-shadow .4s ease; 
  box-shadow: 0 1px 5px 2px rgba(0,0,0,.2) !important;
  CARDS HOVER:
  background-color: #f6f6f3
  LINKS HOVER:
  background-color: #e9ebe4;
  FOOTER:
  background-color: #6e634f;
  DATE:
      font-size: 0.6875rem;
    line-height: 13px;
    line-height: 0.8125rem;
    font-weight: 400;
    font-style: normal;
    font-family: "nyt-franklin",arial,helvetica,sans-serif;
    display: block;
    color: #999;
  P TEXT:
  font-size: 0.9375rem;
    line-height: 22px;
    line-height: 1.375rem;
    font-weight: 500;
  */
}
.results{
  z-index: 50;
  background-color: #F7F5E6;
  /* box-shadow: 0 6px 45px #555;*/
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin: 0 auto 1rem auto;
}
@media only screen and (max-width: 959px) {
  .results{
   width: 85%;
  }
}
`

export const form = css`


.clear{
  cursor: pointer;
  float: right;
  color: #333A56;
  padding-right: 1em;
  padding-left: 1em;
  background-color: #E8E8E8;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
}
.clear.pressed{
  font-size: 85%;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12);
}


.query pre{
  width: 100%;
  min-height: 3rem;
  padding: 9.5px;
  margin: 0 0 10px;
  background-color: #E8E8E8;
  color: #333A56;
  word-break: break-all;
  word-wrap: break-word;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.query pre code{
  white-space: pre-wrap;
  font-size: 0.7rem;
 }

.uk-input:focus {
  outline: none;
  background-color: #fff;
  color: #666;
  border-color: #52658F;
}
.uk-button-primary {
  background-color: #333A56;
  padding-left: 30px;
  color: #fff;
  border: 1px solid transparent;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  
}
.uk-button-primary:hover {
  background-color: #52658F;
}
form{
   margin: 0 auto;
   padding-top: 2rem;
}
fieldset{
  padding-left: 0;
}
.datepicker{
  margin-top: 1rem;
}
@media only screen and (min-width: 529px) {
  fieldset:first-of-type{
    padding-right: 1rem;
  }
}
`
export const card = css`

@font-face {
  font-family: 'cheltenham700';
  src: url(${font__header}), url(${font__header}) format('woff');
}
@font-face {
  font-family: 'cheltenham400';
  src: url(${font__main}), url(${font__main}) format('woff');
}
@font-face {
  font-family: 'franklin';
  src: url(${font__franklin}), url(${font__franklin}) format('woff');
}

.uk-card-body {
  padding: 15px 15px;
}
.uk-label {
  background: #52658F;
  color: #f6f6f3;
  font-size: 0.7rem;
  
}
.uk-flex-middle{
  overflow: hidden;
}
.uk-card-footer {
  padding: 10px 20px;
}
.card-text{
  font-family:  'cheltenham400',georgia,"times new roman",times,serif;
  display: block;
  margin: 1rem auto 0 auto;
  font-size: 1rem;
  height: 75px;
  color: #333;
  line-height: 28px;
  line-height: 1.75rem;
  letter-spacing: .01em;
    
  }
.uk-card-title{
  font-family:  'franklin',georgia,"times new roman",times,serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 28px;
  line-height: 1.75rem;
  letter-spacing: .01em;
}
.uk-card-badge {
  top: 15px;
  right: 15px;
}
p > time {
  font-size: 0.6875rem;
  line-height: 13px;
  line-height: 0.8125rem;
  font-weight: 400;
  font-style: normal;
  font-family: "franklin",arial,helvetica,sans-serif;
  display: block;
  color: #999;

}
.img-wrapper {
  position: relative;
  width: 100px;
}
.img-wrapper > img{
  object-fit: cover;
  width: 100%;
  height: 80px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 10;
 
}
.colored-shadow{
  transform: scale(.85);
  top: 8px;
  filter: blur(12px);
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: 5;
  
  
}

#card__stacked {
  position: relative;
  background: #fff;
  color: #666;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: box-shadow 0.25s ease-out, transform 0.25s ease-out;
  
}
#card__stacked:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transform: translateY(-5px);
}

.card__shown {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 80%;
  height: 400px;
  text-align: center;
  background: lightgreen;
}



@media only screen and (min-width: 639px) and (max-width: 810px){
  .uk-flex-middle{
    height: 250px;
  }
}
`
export const modal = css`

@font-face {
  font-family: 'cheltenham700';
  src: url(${font__header}), url(${font__header}) format('woff');
}
@font-face {
  font-family: 'cheltenham400';
  src: url(${font__main}), url(${font__main}) format('woff');
}
@font-face {
  font-family: 'franklin';
  src: url(${font__franklin}), url(${font__franklin}) format('woff');
}
.card-text{
  
    
  }
  .uk-card-title{
    font-family:  'franklin',georgia,"times new roman",times,serif;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 28px;
    line-height: 1.75rem;
    letter-spacing: .01em;
  }
  .uk-card-badge {
    top: 15px;
    right: 15px;
  }
  .uk-card-badge:nth-child(2) {
    top: 40px;
    right: 15px;
  }
  .uk-label {
    background: #52658F;
    color: #f6f6f3;
    font-size: 0.7rem;
    
  }
  .uk-label:nth-child(2) {
    background: #d4c89e;
   }
   .uk-text-meta {
     margin: 0 0 0.5rem 0;
   }
  p > time {
    font-size: 0.7875rem;
    line-height: 13px;
    line-height: 0.8125rem;
    font-weight: 400;
    font-style: normal;
    font-family: "franklin",arial,helvetica,sans-serif;
    display: block;
    color: #999;
  
  }
  hr{
    width: 100%;
    margin-top: 2rem;
    margin-left: 1rem;
  }
  .headline{
    font-family:  'cheltenham400',georgia,"times new roman",times,serif;
    margin: 1rem auto 0 auto;
    font-size: 1.4rem;
    height: 75px;
    color: #333;
    line-height: 28px;
    line-height: 1.75rem;
    letter-spacing: .01em;
  }
  .img-wrapper {
    position: relative;
    width: 130px;
   
  }
  .img-wrapper > img{
    object-fit: cover;
    width: 100%;
    height: 80px;
    position: relative;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    z-index: 10;
   
  }
  .colored-shadow{
    transform: scale(.85);
    top: 10px;
    filter: blur(12px);
    position: absolute;
    width: 90%;
    height: 100%;
    background-size: cover;
    z-index: 5;
    
    
  }
  


`

export const header = css`
.logo{
  position: relative;
  padding: 2rem;
  margin: 0 auto;
}
.logo::after{
  z-index: 200;
  position: absolute;
    bottom: 1rem;
    right: 0;
    content: "archive";
    color: #d4c89e;
    font-size: 300%;
    font-weight: bold;
    text-shadow: 2px 0 1px #233237, -2px 0 1px #233237, 0 2px 1px #233237, 0 -3px 1px #233237, 2px 2px #233237, -2px -2px 0 #233237, 2px -2px 0 #233237, -2px 2px 0 #233237;
    transform: rotateZ(-15deg)
  }  

  .header{
    margin: 0 auto;
    background-color: #F7F5E6;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  @media only screen and (max-width: 959px) {
    .header{
      width: 85%;
    }
    .logo::after{
      font-size: 200%;
      margin-right: 1rem;
    } 
  }
  @media only screen and (max-width: 480px) {
    .logo::after{
      font-size: 150%;
    } 
              
  }
`





