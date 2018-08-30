import React, { Component } from 'react';
import Intro from '../Intro/index.jsx';
import Series from '../../containers/Series/index';
import Toolbar from '../../Components/Toolbar/Toolbar.jsx';
import SideDrawer from '../../Components/SideDrawer/SideDrawer.jsx'
import Backdrop from '../../Components/Backdrop/Backdrop.jsx';
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
          <Series />
        </main>
      </div>
    );
  }
}

export default App;
