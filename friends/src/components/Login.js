import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  }

  inputHandler = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  loginHandler = (event) => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      if (!this.props.error) {
        this.props.history.push("/dashboard");
      }
    })
    this.setState({
      credentials: {
        username: '',
        password: ''
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.loginHandler}>
          <input name='username' value={this.state.credentials.username} onChange={this.inputHandler} />
          <input name='password' value={this.state.credentials.password} onChange={this.inputHandler} />
          <button>
            {this.props.isLoggingIn ? 'Checking' : 'Log in'}
          </button>
        </form>
        {this.props.error && <div>{this.props.error}</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
  isLoggingIn: state.isLoggingIn,
})

export default connect(mapStateToProps, { login })(Login);