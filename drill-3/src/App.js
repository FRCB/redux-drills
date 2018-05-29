import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addGuest, deleteGuest } from './ducks/guestList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit() {
    this.props.addGuest(this.state.input);
    this.setState({ input: '' })
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map((guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button
                  onClick={() => this.props.deleteGuest(i)}>
                  Remove
                  </button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest:
          <input
            value={this.state.input}
            onChange={this.handleInputChange}
            type="text"
            className="" />
          <button
            onClick={this.handleSubmit}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests,
  };
}

export default connect(mapStateToProps, { addGuest, deleteGuest })(App);
