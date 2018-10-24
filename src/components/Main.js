import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
