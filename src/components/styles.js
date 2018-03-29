import css from 'styled-jsx/css';
import img from '../assets/images/newspaper.jpg';
import font__header from '../assets/fonts/cheltenham-italic-700.woff';
import font__main from '../assets/fonts/cheltenham-normal-400.woff';
import font__franklin from '../assets/fonts/nyt-franklin-500-normal.woff';


export default css`
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
  .main{
    background-image: url(${img});
    background-size: contain;
    padding-bottom: 0;
    
  }
  .main.modal-open {
    
  }
  .results-wrapper{
    padding-bottom: 1rem;
    
  }
  .results{
    z-index: 50;
    background-color: #F7F5E6;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
  
  }
  @media only screen and (max-width: 959px) {
    .results{
    width: 85%;
    }
  }
  @media only screen and (max-width: 480px) {
    html{
      font-size: 14px;
  }
    .results{
    width: 90%;
    }
  }
`
/********NAVBAR SYLES *****/
export const navbar = css`
  #search {
    color: #333;
  }
 
  .uk-navbar-nav>li>a {
    color: #A9B7C0;

  }
  .uk-navbar-nav>li>a:hover {
    color: #333;
  }
  .uk-navbar-nav>li:hover {
    background-color: #e9ebe4;
  }
  .uk-navbar-nav>li.uk-active>a {
    color: #333;
  }
  .uk-navbar-transparent {
    background-color: #F7F5E6;
  }
  nav > div > ul > li:nth-child(2) > a{
    cursor: default;
  }
  .uk-navbar {
    margin: 0 auto;
  }
  .uk-navbar-dropdown {
    width: 150px;
    padding: 10px;
    
  }
  
  `
/******ABOUT VIEW STYLES****/
export const aboutView = css`
  .about-view{
    width: 75%;
    height: 100vh;
    background-color: #d4c89e;
    display: block;
    position: fixed;
    margin: 0 auto;
    top: 0;
    left: calc(50% - 37.5%);
    z-index: 999;
    pointer-events: none;
    transition: all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 50% 0%, 0% 0%);
  }  
  .about-view.open{
    pointer-events: all;
    transition: all 0.75s cubic-bezier(0.47, 0, 0.745, 0.715);
    clip-path: polygon(0% 0%, 100% 0%, 100% 125%, 50% 150%, 0% 125%);
  }
  .about-view__text{
    text-align: justify;
    margin: 0 auto;
  }
  article{
    padding: 2rem;
    position: relative;
  }
  article button{
    position: absolute;
    top: 1rem;
    left: 1rem;;
  } 
  .about-view article *{
    opacity: 0;
  }
  .about-view.open article *{
    animation: fadeIn 0.9s ease 0.1s;
    animation-fill-mode: forwards;
  }
  .about-view.open article h2:nth-of-type(1){
    animation-delay: 0.2s;
  }
  .about-view.open article p:nth-of-type(1){
    animation-delay: 0.3s;
  }
  .about-view.open article h2:nth-of-type(2){
    animation-delay: 0.4s;
  }
  .about-view.open article p:nth-of-type(3){
    animation-delay: 0.5s;
  }
  .about-view.open article h2:nth-of-type(3){
    animation-delay: 0.55s;
  }
  .about-view.open article p:nth-of-type(3),
  .about-view.open article ul{
    animation-delay: 0.6s;
  }
  .about-view.open article h2:nth-of-type(4){
    animation-delay: 0.7s;
  }
  .about-view.open article p:nth-of-type(4){
    animation-delay: 0.75s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate3d(-100px, 0, 0);
      }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @media only screen and (max-width: 959px) {
    .about-view{
      width: 85%;
      left: calc(50% - 42.5%);
    }
  }
  @media only screen and (max-width: 480px) {
    .about-view{
      width: 90%;
      left: calc(50% - 45%);
      overflow-y: auto;
    }
  }
`
/********HEADER STYLES *****/
export const header = css`

  @font-face {
    font-family: 'cheltenham400';
    src: url(${font__main}), url(${font__main}) format('woff');
  }
  .logo{
    position: relative;
    padding: 2rem;
    margin: 0 auto;
  }
.logo::after{
  font-family:  'cheltenham400',georgia,"times new roman",times,serif;
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
    .header{
      width: 90%;
    } 
  }
`
/********FORM STYLES***/
export const form = css`
  .uk-form-label {
    margin-left: 0.25rem;
  }
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
  .query{
    margin-right: auto;
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
  ::selection{
    background-color: rgb(51, 134, 65);

  }
  .uk-input:focus, .uk-select:focus {
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
  .uk-grid > * {
    padding-left: 0;
  }
  .uk-grid {
    margin-left: auto;
  }
  @media only screen and (min-width: 529px) {
    fieldset:first-of-type{
      padding-right: 1rem;
    }
  }
  @media only screen and (max-width: 480px) {
    .query pre code{
      font-size: 0.8rem;
    }
  }
`
/******CARD STYLES*****/
export const card = css`
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
    margin: 0.5rem auto 0.25rem auto;
    padding-bottom: 0.5rem;
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
    padding-bottom: 55px;
    
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
/*****MODAL STYLES***/

export const modal = css`
  .title-grid{
    margin-top: 0;
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
    top: 50px;
    right: 15px;
  }
  .uk-card-badge:nth-child(2) {
    top: 15px;
    right: 15px;
  }
  .uk-card-badge:nth-child(3) {
    top: 25px;
    right: 15px;
  }
  .uk-label {
    background: #6e634f;
    color: #f6f6f3;
    font-size: 0.7rem;
    
  }
  .uk-label:nth-child(2) {
    background: #52658F;
   
   }
 
  .uk-label:nth-child(3) {
    background: #d4c89e;
  
  }
  .uk-text-meta {
    margin: 0 0 0.3rem 0;
    font-size: 0.7875rem;
    line-height: 0.8125rem;
    font-weight: 300;
    font-style: normal;
    font-family: "franklin",arial,helvetica,sans-serif;
    display: block;
    color: #000;
  }
  p > time {
    font-size: 0.7875rem;
    line-height: 0.8125rem;
    font-weight: 300;
    font-style: normal;
    font-family: "franklin",arial,helvetica,sans-serif;
    display: block;
    color: #000;
  
  }
  hr{
    width: 100%;
    margin-top: 1.5rem !important;
    margin-left: 0;
    padding-left: 0;
  }
  .body-left{
    margin-bottom: 1rem;
    padding-left: 0;

  } 
 .body-left > span:nth-child(5), 
 .body-left > span:nth-child(8) {
    font-family:  'cheltenham400',georgia,"times new roman",times,serif;
    color: #000;
    font-size: 1.0625rem;
    line-height: 1.625rem;
      }
  .body-left  p,
  .body-right p{
    background: linear-gradient(to right,#d4c89e7a 100%,#E8E8E8 0%) no-repeat;
    background-position: 50%;
    background-size: 100% 50%;
    color: #000;
    display: inline-block;
    margin:  0.5rem 0.3rem 0 0;
    } 
  .headline{
    font-family:  'cheltenham700',georgia,"times new roman",times,serif;
    margin: 1rem auto 0 auto;
    font-size: 1.3rem;
    height: 75px;
    color: #333;
    line-height: 28px;
    line-height: 1.75rem;
    letter-spacing: .01em;
  }
  .modal-url,
  .modal-url:hover{
    word-wrap: break-word;
    color: #326891;
  }
  .keyword{
    color: #333A56;
    display: inline-block;
    font-size: 0.8rem;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0.3em 0.5em;
    background-color: #E8E8E8;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
  }
  
  .img-wrapper + div{
    margin-left: 150px;
    margin-top: 15px;
  }
  .img-wrapper {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 130px;
    padding-left: 0;
   
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
    transform: scale(.9);
    top: 10px;
    left: 10px;
    filter: blur(12px);
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: 5;
    
    
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
  .uk-card-footer {
    padding: 16px 30px 0 30px;
  }

  @media only screen and (max-width: 480px) {
    .uk-modal-close-outside{
      right: 10px;
      top: 25px;
      color: #000;
    }
    .uk-card-badge {
      top: 50px;
     
    }
    .uk-card-badge:nth-child(2) {
      top: 25px;
      
    }
    .uk-card-badge:nth-child(3) {
      top: 30px;
     
    }
  }
  
  @media only screen and (min-width: 1200px) {
    .colored-shadow{
      width: 85%;
      left: 35px;
     
    }
  }

  @media only screen and (min-width: 640px) and (max-width: 811px) {
    .colored-shadow{
      top: 10px;
      width: 100%;
      height: 100%;
          
    }
  }
  @media only screen and (max-width: 640px) {
    .img-wrapper + div{
      margin-left: 5px;
      margin-top: 90px;
      padding-left: 15px;
    }
    hr{
     margin-top: 0 !important;
      
    }
  }
`
/*****FOOTER STYLES***/

export const footer = css`
  .footer{
    color: rgba(248, 245, 231, 0.761);
    z-index: 50;
    padding: 0 2rem 0 2rem;
    background-color: #333;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
    font-size: 0.8rem;
  }
  .app-logo{
    margin: 1rem 0.5rem 10px 0.5rem;
    font-size: 0.95rem;
  }
  .app-logo p{
    margin: 0;
  }
  .ny-logo{
    width: 30px;
    height: auto;
    display: inline;
    margin-bottom: 4px;
    margin-left: 3px;

  }
  .credits{
    position: relative;
    left: -2%;   
    margin-bottom: 10px;
  }
  .credit {
    display: inline;
    margin-right: 5px;
    font-size: 0.95rem;
        
  }
  .bugol {
    height: 50px;
    width: 50px;
  }
  .copyright {
    display: inline;
    margin: 0;
    color: #d7d6c2;
    font-size: 0.9rem;
   
  }
  @media only screen and (min-width: 1200px){
    .credits{
      left: -1%;   
    }

  }
  @media only screen and (max-width: 959px){
    .footer {
        width: 85%;
    }
  }
  @media only screen and (max-width: 480px){
    .footer {
        width: 90%;
        padding: 0;
    }
    .ny-logo{
      width: 20px;
      
    }
    .bugol {
      height: 35px;
      width: 35px;
    }
  }
`