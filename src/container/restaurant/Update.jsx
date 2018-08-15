import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Update extends Component {
  state = {
    name: '',
    image: '',
    address: '',
    link: false
  };

  dataGet = () => {
    console.log(this.props.match.params.id);
    axios
      .get(`http://localhost:8000/api/restaurant/${this.props.match.params.id}`)
      .then(res => {
        console.log(res, '>>>>ini res id');
        this.setState({
          name: res.data[0].name,
          address: res.data[0].address,
          image: res.data[0].image
        });
      });
  };

  dataPut = id => {
    axios
      .put(`http://localhost:8000/api/restaurant/${id}`, {
        name: this.state.name,
        image: this.state.image,
        address: this.state.address
      })
      .then(res => {
        console.log(res);
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

  componentDidMount() {
    this.dataGet();
  }

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
              this.dataPut(this.props.match.params.id);
            }}>
            Edit
          </button>
        </div>

        {this.state.link ? <Redirect to="/restaurant" /> : <h1>Hallo</h1>}
      </div>
    );
  }
}
