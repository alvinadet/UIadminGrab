import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
      .get(
        `http://localhost:8000/api/restaurants/${this.props.match.params.id}`
      )
      .then(res => {
        console.log(res, '>>>>ini res id');
        this.setState({
          name: res.data.name,
          address: res.data.address,
          image: res.data.image
        });
      });
  };

  dataPut = id => {
    axios
      .put(`http://localhost:8000/api/restaurants/${id}`, {
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
        <h1>Update Data</h1>
        <Form>
          <Form.Field>
            <label>Nama Toko</label>
            <input
              placeholder="Nama Toko"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input
              placeholder="Image"
              onChange={this.handleChange}
              name="image"
              value={this.state.image}
            />
          </Form.Field>
          <Form.Field>
            <label>Alamat</label>
            <input
              placeholder="address"
              onChange={this.handleChange}
              name="address"
              value={this.state.address}
            />
          </Form.Field>
          <Button
            type="submit"
            onClick={() => {
              this.dataPut(this.props.match.params.id);
            }}>
            Edit
          </Button>
          <Button as={Link} to="/restaurant">
            Cancel
          </Button>
        </Form>

        {this.state.link ? <Redirect to="/restaurant" /> : ''}
      </div>
    );
  }
}
