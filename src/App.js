import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from './components/car';

class App extends Component {

      constructor(props) {
        super(props);
        this.state = {contacts: []};
      }


      

      componentDidMount() {
        fetch('http://localhost:8081/cars')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
          console.log(data)
        })
        .catch(console.log)
      }

      render() {
        return (
          <Cars cars={this.state.contacts} filter={this.setFilter}/>
  
        );
      }
    }

export default App;
