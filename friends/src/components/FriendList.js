import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';
import Friend from './Friend';

class FriendList extends React.Component {
  componentDidMount() {
    this.props.getFriends()  
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <div>Fetching friends</div>}
        {this.props.error && <div>{this.props.error}</div>}
        {this.props.friends.map(item => <Friend friend={item} key={item.id}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends,
  isFetching: state.isFetching,
  error: state.error
})

export default connect(mapStateToProps, { getFriends })(FriendList);