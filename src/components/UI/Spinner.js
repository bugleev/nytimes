import React from "react";
import { ScaleLoader } from 'react-spinners';


const Spinner = (props) => {
  return (
    <div className="uk-width-1-1 uk-text-center">
      <ScaleLoader
        color={'#d4c89e'}
        loading={props.loadState}
        height={window.innerWidth > 480 ? 150 : 100}
        width={window.innerWidth > 480 ? 10 : 10}
      />
      <style jsx>{`
        .uk-text-center{
          padding: ${props.loadState ? '2rem 0 2rem 0' : '0'};    
        }
        @media only screen and (max-width: 480px) {
          .uk-text-center{
            margin-left: 30px;    
          }
        }
        
          `}</style>
    </div>
  )
}

export default Spinner;