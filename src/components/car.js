
import Filters from './filter'

import React, { Component } from 'react';

class Cars extends Component {

      constructor(props) {
        super(props);
        this.state = {cars: this.props.car || []};
        this.setFilter = this.setFilter.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
      }

      setFilter(val) {
        debugger;
        console.log(val)
        const filteredValue = this.props.cars.filter(contact => {
          console.log("brand", contact.brand)
          return contact.brand === val
        })
        if(filteredValue.length) {
          this.setState({cars: filteredValue});  
        }
        

      }

      clearFilter() {
        this.setState({cars: this.props.cars})
      }

      componentWillReceiveProps(nextProps) {
        debugger;
        console.log(nextProps);
        if(this.props.cars != nextProps.cars) {
          this.setState({cars: nextProps.cars})
        }
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        
        event.preventDefault();
      }


      render() {
        const { cars } = this.state;
        
        return (
        <div>
          <center><h1>Car List</h1></center>
          <Filters filter={this.setFilter} clearFilter={this.clearFilter} cars={this.props.cars}/>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Color</th>
                <th scope="col">Brand</th>
                <th scope="col">year</th>
              </tr>
            </thead>
             <tbody>
          {cars.map((car, idx) => (
              <tr>
                <th scope="row">{idx}</th>
                <td>{car.color}</td>
                <td>{car.brand}</td>
                <td>{car.year}</td>
              </tr>
          ))}
          </tbody>
          </table>
        </div>
      )
      }
    }

    export default Cars