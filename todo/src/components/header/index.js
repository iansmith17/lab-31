import React from 'react';

export default props => {
  return (
    <header>
      <h2>There Are {" "} {props.todoList.filter(item => !item.complete).length} {" "} Items To Complete</h2>
    </header>
  )
}