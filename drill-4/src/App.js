import React, { Component } from 'react';
import { addGuest, removeGuest, updateName } from './ducks/guestList';
import { connect } from 'react-redux';
import EditGuest from './EditGuest';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      edit: false,
      guestToEdit: '',
      guestIndex: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editName = this.editName.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this)
    this.updateGuestName = this.updateGuest.bind(this)
  }

  editName(e) {
    this.setState({
      guestToEdit: e.target.value
    })
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addGuest(this.state.text);
    this.setState({
      text: ''
    })
  }

  hideModal() {
    this.setState({
      edit: false
    })
  }

  showModal(guest, index) {
    this.setState({
      edit: true,
      guestToEdit: guest,
      index: index
    })
  }

  updateGuestName() {
    this.props.updateName(this.state.guestToEdit, this.state.index);
    this.hideModal();
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
                <div className="">
                  <button
                    onClick={this.showModal(guest, i)}
                    type="">Edit</button>
                  <button
                    onClick={() => this.props.removeGuest(i)}
                    type=""
                    className="">Remove</button>
                </div>
              </div>
            )
          })}
        </ul>
        <form
          onSubmit={this.handleSubmit}
          className="add-guest">
          Add guest: <input
            value={this.state.text}
            onChange={this.handleInputChange}
            type="" className="" />
          <button
            type=""
            className="">Add</button>
        </form>
        {
          this.state.edit
            ?
            <EditGuest
              hide={this.hideModal}
              guest={this.state.guestToEdit}
              edit={this.editName}
              update={this.updateGuestName}
            />
            : null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  }
}

export default connect(mapStateToProps, { addGuest, removeGuest })(App);
