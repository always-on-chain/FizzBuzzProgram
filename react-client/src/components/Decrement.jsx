import React from 'react';

const Decrement = (props) => {
  return (
    <div id="decrement">
      <a className="waves-effect waves-light btn-large purple darken-2 buttons" 
         onClick={()=> {props.onClick('decrement')}}>
         Decrease
      </a>
    </div>
  )
}

export default Decrement;