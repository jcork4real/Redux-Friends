import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

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

  componentDidUpdate(prevProps) {
    if (this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
      this.setState({
        input: this.props.activeFriend
      })
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
        [event.target.name]: value
      }
    })
  } 

  submitHandler = (event) => {
    event.preventDefault();
    if (this.props.activeFriend) {
      this.props.updateFriend(this.state.input);
    } else {
      this.props.addFriend(this.state.input);
    }
    this.setState({
      input: {
        name: '',
        age: '',
        email: '',
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='name' value={this.state.input.name} onChange={this.inputHandler} required />
          <input type='number' name='age' value={this.state.input.age} onChange={this.inputHandler} required />
          <input type='email' name='email' value={this.state.input.email} onChange={this.inputHandler} required />
          <button>{this.props.activeFriend ? 'Edit friend' : 'Add friend'}</button>
        </form>
        {this.props.error && <div>{this.props.error}</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAdding: state.isAdding,
  isEditing: state.isEditing,
  error: state.error
})

export default connect(mapStateToProps, { addFriend })(FriendForm)