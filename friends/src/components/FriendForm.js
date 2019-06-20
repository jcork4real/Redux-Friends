import React from 'react';

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
        name: '',
        age: '',
        email: '',
      }
    }
  }

  inputHandler = (event) => {
    event.persist();
    let value = event.target.value;
    if (event.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value
      }
    })
  } 

  addFriend = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state.input);
    this.setState({
      input: {
        name: '',
        age: '',
        email: '',
      }
    })
  }

  render() {
    <div>
      <form>
        <input name='name' value={this.state.input.name} onChange={} />
        <input name='age' value={this.state.input.age} />
        <input name='email' value={this.state.input.email} />
        <button onClick={this.addFriend}>Add friend</button>
      </form>
    </div>
  }
}