import React from 'react';
import { Link, IndexLink } from 'react-router';

function Workspace(props) {
  return (
    <div>
      <nav>
        <IndexLink to="/">Home</IndexLink>{' '}
        <Link to="/comment">Comment</Link>{' '}
        <Link to="/todo">Todo</Link>{' '}
        <Link to="/signup">signup</Link>{' '}
        <Link to="/login">login</Link>
      </nav>
      {props.children}
    </div>
  )
}

export default Workspace;
