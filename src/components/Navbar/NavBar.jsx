import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/restaurant">
          <button>List</button>
        </Link>
        <Link to="/restaurant/update">
          <button>Update</button>
        </Link>
        <Link to="/restaurant/add">
          <button>Add</button>
        </Link>
      </div>
    );
  }
}
