import React from 'react';

const Warning = (props) => {
  if (props.show) {
    return (
      <div className="warning" >
        <h2 className="uk-text-center">Внимание!</h2>
        <p className="uk-text-justify">В связи с последними блокировками Telegram, IP адреса NYTimes API попали в черный список РКН и у некоторых провайдеров могут не открываться. Поэтому, если результаты поиска не отображаются в течении долгого времени, значит Ваш провайдер блокирует IP адреса api.nytimes.com, следует использовать VPN для доступа к сервису.</p>
        <div className="uk-text-center">
          <button
            className="uk-button uk-button-large uk-button-text" onClick={props.click}>close
          </button>
        </div>
        <style jsx>{`
          .warning{
            border: 5px solid #333;
            padding: 1em;
            margin: 1em;
            background-color: #f8f8f8;
            opacity: 0;
            top: calc(50% - 30%);
            z-index: 999;
            position: fixed;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            animation: fadeIn 0.9s ease 0.1s;
            animation-fill-mode: forwards;
          }
            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translate3d(-1000px, 0, 0);
                }
              100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
              }
            }
            @media only screen and (min-width: 780px) {
              .warning{
                width: 600px;
                left: calc(47.5% - 300px);
              }
            }
          
       `}</style>
      </div>
    )
  } else return null
}
export default Warning;


