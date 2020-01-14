import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class Input extends Component{
  render(){
    return(
      <input id={this.props.id}></input>
    )
  }
}

class App extends Component {
  renderInput(i){
    return(<Input id={i}/>)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
        {this.renderInput(`firstNameIn`)}
        {this.renderInput(`lastNameIn`)}
        {this.renderInput(`impressionIn`)}
      </div>
    );
  }
}

export default App;
