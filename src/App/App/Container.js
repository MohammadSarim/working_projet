import React, { Component } from 'react';
import './Container.css';
// import Text from '../../Text/Text/Text';
class Container extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {


    return (
      <div className="App" >
      <h1>I am app </h1>
      {this.props.children}
      </div>
    );
  }
}

export default Container;


// class name_with{
//   constructor (){
//   this.name = "sarim",
//   this.age = 17
//   }
//   }

//   new name_with()