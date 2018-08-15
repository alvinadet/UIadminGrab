import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import {
  RestaurantAdd,
  RestaurantList,
  RestaurantUpdate,
  Home
} from './container';
import NavBar from './components/Navbar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurant" exact component={RestaurantList} />
          <Route
            path="/restaurant/:id/update"
            exact
            component={RestaurantUpdate}
          />
          <Route path="/restaurant/add" component={RestaurantAdd} />
        </Switch>
      </div>
    );
  }
}

export default App;
