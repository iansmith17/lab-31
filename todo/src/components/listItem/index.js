import React from 'react';

export default props => {
  return (
    <li
      className={`complete-${props.item.complete.toString()}`}
      key={props.item._id}
    >
      <span onClick={() => props.functions.toggleComplete(props.item._id)}>
        {props.item.text}
      </span>
      <button onClick={() => props.functions.toggleDetails(props.item._id)}>
        Details
      </button>
      <button onClick={() => props.functions.deleteItem(props.item._id)}>
        Delete
      </button>
    </li>
  )
}