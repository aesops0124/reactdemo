import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/number.js'
class App extends Component {

  state = {number: this.props.defaultNumber}
  onclickDefaultNumber = () => {
    this.setState({number: this.props.onclickDefaultNumber(this.state.number)})
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
          <Number/>
      </div>
    );
  }
}

export default App;
