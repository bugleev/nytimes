import React from 'react';

const Backdrop = (props) => {
  const badBrowser = navigator.userAgent.indexOf("Firefox") !== -1;
  if (props.show) {
    return (
      <div className="backdrop" onClick={props.click}>
        <style jsx>{`
          .backdrop{
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            position: fixed;
            background-color: ${badBrowser ? "rgba(51, 51, 51, 0.604)" : "none"};
          }
       `}</style>
      </div>
    )
  } else return null
}
export default Backdrop;


