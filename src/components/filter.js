import React, { Component } from 'react';

class Filters extends Component {

      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        this.props.filter(event.target.value);

      }


      render() {
        const { cars } = this.props;
        let uniqueCars = cars.filter((car, index, self) =>
            index === self.findIndex((t) => (
              t.brand === car.brand
            ))
          );
        const options = uniqueCars.map(car => {
          return <option value={car.brand}>{car.brand}</option>
        })
        return (
          <div>
            <span onClick={this.props.clearFilter}>clear all</span>
            <form>
              <label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value='' disabled>Select </option>
                  {options}
                </select>
              </label>
            </form>
          </div>
  
        );
      }
    }

export default Filters;
