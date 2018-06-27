import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './components/Messages.jsx';
import Decrement from './components/Decrement.jsx';
import Increment from './components/Increment.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 1,
      fizzBuzz: 'null'
    }
  }

  determineFizzBuzz() {
    let currentNumber = this.randomizeStartNumber(1, 100);

    console.log('currentNumber', currentNumber)

    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      this.setState({
        fizzBuzz: 'FizzBuzz',
        currentNumber: currentNumber
      });
    } else if (currentNumber % 3 === 0) {
      this.setState({
        fizzBuzz: 'Fizz',
        currentNumber: currentNumber
      });
    } else if (currentNumber % 5 === 0) {
      this.setState({
        fizzBuzz: 'Buzz',
        currentNumber: currentNumber
      });
    } else {
      this.setState({
        fizzBuzz: currentNumber.toString(),
        currentNumber: currentNumber
      });
    }
  }

  //instead of initialize the program with the same number, randomizing the number would provide
    //a more interesting UX
  randomizeStartNumber(bottom, top) {
    return Math.floor(Math.random() * ( 1 + top - bottom ) ) + bottom
  }

  componentWillMount() {
    this.randomizeStartNumber(1, 100);
    this.determineFizzBuzz();
  }
  
  render() {
    return (
      <div id="interface">
        <Messages currentNumber={this.state.currentNumber} fizzBuzz={this.state.fizzBuzz} />
        <Decrement currentNumber={this.state.currentNumber} />
        <Increment currentNumber={this.state.currentNumber} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));