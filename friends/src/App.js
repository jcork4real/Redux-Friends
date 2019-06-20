import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendList from './components/FriendList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div>Friends App (Redux version)</div>
            <Link to='/login'>Login</Link>
            <Link to='/dashboard'>Dashboard</Link>
          </header>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={FriendList} />
        </div>
      </Router>
    );
  }
}

export default App;
