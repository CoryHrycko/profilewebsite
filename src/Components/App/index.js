import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';


class App extends Component {
  state = {
    series: []
  }
  componentDidMount() {
    const series = ["Qi", "ew"];
    setTimeout(() => {
          this.setState({series: series });
    }, 2000);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cory Hrycko's Website</h1>
        </header>
        <Intro message="HEre is the best Profile web ever"/>
       Length of array {this.state.series.length}
      </div>
    );
  }
}

export default App;
