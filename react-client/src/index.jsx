import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './components/Messages.jsx';
import Decrement from './components/Decrement.jsx';
import Increment from './components/Increment.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 0
    }
  }
  
  render() {
    return (
      <div id="interface">
        <Messages currentNumber={this.state.currentNumber} />
        <Decrement currentNumber={this.state.currentNumber} />
        <Increment currentNumber={this.state.currentNumber} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));