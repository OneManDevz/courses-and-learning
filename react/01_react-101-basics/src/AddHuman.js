import React, { Component } from 'react';

class AddHuman extends Component {
  state = {
    name: null,
    age: null,
    profession: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addHuman(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' onChange={this.handleChange}></input>
          <label htmlFor='age'>Age</label>
          <input type='text' id='age' onChange={this.handleChange}></input>
          <label htmlFor='profession'>Profession</label>
          <input type='text' id='profession' onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddHuman;
