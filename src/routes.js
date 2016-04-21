import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CommentApp from './modules/comments/CommentApp';
import TodoApp from './modules/TodoApp';
import SignupForm from './modules/auth/SignupForm';
import LoginForm from './modules/auth/LoginForm';

export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="comment" component={CommentApp}/>
    <Route path="todo" component={TodoApp} />
    <Route path="signup" component={SignupForm} />
    <Route path="login" component={LoginForm} />
  </Route>
)
