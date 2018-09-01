import React, { Component } from 'react';
import { Broweser as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';

import Nav from './components/layout/Nav';
// import Index from './components/layout/Index';
// import Lyrics from './components/tracks/Lyrics';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics}/>
              </Switch>
            </div>          
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
