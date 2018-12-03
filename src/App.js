import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/number.js'
import Line from './components/line.js'
class App extends Component {

  state = {number: this.props.defaultNumber,
    numberArray: new Array(1).fill(0)}
  onclickDefaultNumber = () => {
    var updatedNumber = this.props.onclickDefaultNumber(this.state.number)
    this.setState({
      
      number: updatedNumber,
      numberArray: new Array(updatedNumber).fill(0)
    })
  }

  alertText() {
    alert("now you know how to handle conlick event")
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
          <button onClick={this.onclickDefaultNumber}>Hello world!</button>
          <Number defaultNumber={this.state.number}/>
          {this.state.numberArray.map(() => (<Line/>))}
      </div>
    );
  }
}

export default App;
