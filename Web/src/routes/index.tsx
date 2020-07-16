import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import TodoPage from '../pages/TodoPage'

const Routes: React.FC = () => (
<Router>
    <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup"  component={SignUp} />

    <Route path="/todopage" component={TodoPage} />
  </Switch>
  </Router>
)

export default Routes;