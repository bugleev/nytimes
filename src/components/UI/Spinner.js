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
    </div>
  )
}

export default Spinner;