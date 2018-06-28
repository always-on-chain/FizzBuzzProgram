import React from 'react';

const Increment = (props) => {
  return (
    <div id="increment">
      <a className="waves-effect waves-light btn-large pink lighten-4 buttons"
         onClick={()=> {props.onClick('increment')}}>
         Increase
      </a>
    </div> 
  )
}

export default Increment;