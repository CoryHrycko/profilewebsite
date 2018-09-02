import React, { Component } from 'react';
import Intro from '../Intro/index.jsx';
import Series from '../../containers/Series/index';
import Toolbar from '../../Components/Toolbar/Toolbar.jsx';
import SideDrawer from '../../Components/SideDrawer/SideDrawer.jsx'
import Backdrop from '../../Components/Backdrop/Backdrop.jsx';
import BodyContainer1  from '../../Components/BodyContainer/FIrstPage/index.js';
import BodyContainer2  from '../../Components/BodyContainer/SecondPage/index.js';
import BodyContainer3  from '../../Components/BodyContainer/ThirdPage/index.js';
import './index.css'
import 'whatwg-fetch';

class App extends Component {  
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () =>{
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

backdropClickHandler=()=>{
  this.setState({sideDrawerOpen:false});
};


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }


    return (
      <div className="App" style={{height: '100%'}}>
        <header className="App-header">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}

        </header>
        <main style={{marginTop:'5em'}}>
          <Intro message="HEre is the best Profile web ever"/>
          <div><BodyContainer1 /></div>
          <div><BodyContainer3 /></div>
          <div><BodyContainer2 /></div>
          <Series />
        </main>
      </div>
    );
  }
}

export default App;
