import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class List extends Component {
  state = {
    data: [],
    loading: false
  };

  getData = () => {
    console.log(this.state.data);
    axios.get('http://localhost:8000/api/restaurant').then(res => {
      console.log(res.data);
      this.setState({
        data: res.data,
        loading: true
      });
      console.log(this.state.data, '>>>>>>');
    });
  };

  dataDelete = id => {
    axios.delete(`http://localhost:8000/api/restaurant/${id}`).then(res => {
      this.getData();
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
              return (
                <div>
                  <Link to={`/restaurant/${datum._id}/update`}>
                    <li>{datum.name}</li>
                  </Link>
                  <button
                    onClick={() => {
                      this.dataDelete(datum._id);
                    }}>
                    Delete
                  </button>
                </div>
              );
            })}
          </ul>
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    );
  }
}
