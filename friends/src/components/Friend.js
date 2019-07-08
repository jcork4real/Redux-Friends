import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <h2>{props.friend.name}</h2>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
      <button onClick={(event) => props.deleteFriend(event, props.friend.id)}>Delete</button>
      <button onClick={(event) => props.setUpdateForm(event, props.friend)}>Edit</button>
    </div>
  )
}

export default Friend;