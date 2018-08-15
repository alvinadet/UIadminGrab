import React, { Component } from 'react';
import axios from 'axios';
export default class List extends Component {
  state = {
    data: [],
    loading: false
  };

  getData = () => {
    axios.get('http://localhost:8000/api/restaurant').then(res => {
      console.log(res.data);
      this.setState({
        data: res.data,
        loading: true
      });
      console.log(this.state.data, '>>>>>>');
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <ul>
            {this.state.data.map(datum => {
              return <li>{datum.name}</li>;
            })}
          </ul>
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>KA</h1>
      </div>
    );
  }
}
