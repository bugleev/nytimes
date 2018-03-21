import React from 'react';

const Backdrop = (props) => {
  if (props.show) {
    return (
      <div className="backdrop" onClick={props.click}>
        <style jsx>{`
          .backdrop{
            width: 100%;
            height: 100%;
            z-index: 999;
            position: fixed;
          }
       `}</style>
      </div>
    )
  } else return null
}
export default Backdrop;


