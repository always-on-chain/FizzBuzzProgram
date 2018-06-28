import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './components/Messages.jsx';
import Decrement from './components/Decrement.jsx';
import Increment from './components/Increment.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: this.randomizeStartNumber(1, 100),
      fizzBuzz: 'null',
    }

    this.onClick = this.onClick.bind(this);
  }

  determineFizzBuzz() {
    let currentNumber = this.state.currentNumber;

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
    this.determineFizzBuzz();
  }

  onClick(type) {
    let currentNumber;
    if (type === 'decrement') {
      if (this.state.currentNumber === 1) {
        alert('You can only increase from here!')
        currentNumber = this.state.currentNumber;
      } else {
        currentNumber = this.state.currentNumber - 1;
      }
    } else {
      if (this.state.currentNumber === 100) {
        alert('You can only decrease from here!')
        currentNumber = this.state.currentNumber;
      } else {
        currentNumber = this.state.currentNumber + 1;
      }
    }

    this.setState({
      currentNumber: currentNumber
    }, ()=> {this.determineFizzBuzz()})
  }
  
  render() {
    return (
      <div id="interface">
        <Messages currentNumber={this.state.currentNumber} fizzBuzz={this.state.fizzBuzz} />
        <Decrement currentNumber={this.state.currentNumber} onClick={this.onClick} />
        <Increment currentNumber={this.state.currentNumber} onClick={this.onClick} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));