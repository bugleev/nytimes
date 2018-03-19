import React from 'react';

const Backdrop = (props) => {
  if (props.show) {
    return (
      <div className="backdrop">
        <style jsx>{`
          .backdrop{
            width: 100%;
            height: 100%;
            z-index: 999;
            position: fixed;
           background-color: #333333b0;
          }
       `}</style>
      </div>
    )
  } else return null
}
export default Backdrop;


