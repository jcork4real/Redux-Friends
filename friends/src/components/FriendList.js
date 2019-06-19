import React from 'react';
import Friend from './Friend';

class FriendList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map(item => <Friend friend={item}/>)}
      </div>
    )
  }
}

export default FriendList;