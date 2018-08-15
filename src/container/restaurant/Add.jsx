import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
export default class Add extends Component {
  state = {
    name: '',
    image: '',
    address: '',
    link: false
  };

  dataPost = () => {
    axios
      .post('http://localhost:8000/api/restaurant', {
        name: this.state.name,
        image: this.state.image,
        address: this.state.address,
        link: true
      })
      .then(res => {
        this.setState({
          link: true
        });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            placeholder="Input"
          />
          <input
            onChange={this.handleChange}
            name="image"
            value={this.state.image}
            placeholder="image"
          />
          <input
            onChange={this.handleChange}
            name="address"
            value={this.state.address}
            placeholder="address"
          />
          <button
            onClick={() => {
              this.dataPost();
            }}>
            Tambah
          </button>
        </div>

        {this.state.link ? <Redirect to="/restaurant" /> : <h1>Hallo</h1>}
      </div>
    );
  }
}
