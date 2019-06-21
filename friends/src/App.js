import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './actions';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendList from './components/FriendList';
import './App.css';

class App extends React.Component {
  
  logout = (event) => {
    event.preventDefault();
    this.props.logout();
    localStorage.removeItem('token')
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div>Friends App (Redux version)</div>
            <div> 
              {this.props.isLoggedIn ? <Link to='/login' onClick={this.logout}>Logout</Link> : <Link to='/login'>Login</Link>}
              <Link to='/dashboard'>Dashboard</Link>
            </div>
          </header>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={FriendList} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, { logout })(App);
