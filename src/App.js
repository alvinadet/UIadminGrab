import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, GridColumn } from 'semantic-ui-react';
import './App.css';
import {
  RestaurantAdd,
  RestaurantList,
  RestaurantUpdate,
  Home,
  FoodsAdd,
  FoodsList,
  FoodsUpdate
} from './container';
import NavBar from './components/Navbar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <NavBar />
            </Grid.Column>
            <Grid.Column width={13}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/restaurant" exact component={RestaurantList} />
                <Route
                  path="/restaurant/:id/foods"
                  exact
                  component={FoodsList}
                />
                <Route
                  path="/restaurant/:id/update"
                  exact
                  component={RestaurantUpdate}
                />
                <Route path="/restaurant/add" component={RestaurantAdd} />

                <Route path="/restaurant/:id/foods/add" component={FoodsAdd} />
                <Route
                  path="/restaurant/:id/foods/update"
                  component={FoodsUpdate}
                />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
