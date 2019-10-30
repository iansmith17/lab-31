import React from 'react';

export default props => {
  return (
    <div>
      <h3>Add Item</h3>
      <form onSubmit={props.onSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={props.onChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={props.onChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={props.onChange} />
        </label>
        <label>
          <span>Due</span>
          <input type="date" name="due" onChange={props.onChange} />
        </label>
        <button>Add Item</button>
      </form>
    </div>
  )
}