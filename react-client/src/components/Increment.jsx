import React from 'react';

const Increment = (props) => {
  return (
    <div id="increment">
      <a className="waves-effect waves-light btn-large purple darken-2 buttons"
         onClick={()=> {props.onClick('increment')}}>
         Increase
      </a>
    </div> 
  )
}

export default Increment;