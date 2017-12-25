import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './routes/Login';
import Company from './routes/Company';
import C_front from './routes/C_front';
import C_back from './routes/C_back';
import C_app from './routes/C_app';
import Details from './routes/Details';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route exact path="/company" component={Company}></Route>
                    <Route path="/company/front" component={C_front}></Route>
                    <Route path="/company/back" component={C_back}></Route>
                    <Route path="/company/app" component={C_app}></Route>
                    <Route path="/company/:id" component={Details}></Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;