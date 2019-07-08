import React from 'react';
import { connect } from 'react-redux';

import { getFriends, deleteFriend, editFriend } from '../actions';
import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null
    }
  }


  componentDidMount() {
    this.props.getFriends()  
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    this.props.deleteFriend(id)
  }

  setUpdateForm = (event, friend) => {
    event.preventDefault();
    this.setState({
      activeFriend: friend
    })
  }

  updateFriend = (friend) => {
    this.props.editFriend(friend);
    this.setState({
      activeFriend: null
    })
  }

  render() {
    return (
      <div>
        <FriendForm activeFriend={this.state.activeFriend} updateFriend={this.updateFriend}/>
        {this.props.isFetching && <div>Fetching friends</div>}
        {this.props.error && <div>{this.props.error}</div>}
        {this.props.friends.map(item => <Friend friend={item} key={item.id} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends,
  isFetching: state.isFetching,
  isDeleting: state.isDeleting,
  error: state.error
})

export default connect(mapStateToProps, { getFriends, deleteFriend, editFriend })(FriendList);