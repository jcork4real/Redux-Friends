import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <h2>{props.friend.name}</h2>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
    </div>
  )
}

export default Friend;