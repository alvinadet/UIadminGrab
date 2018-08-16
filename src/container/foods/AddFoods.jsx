import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default class AddFoods extends Component {
  state = {
    name: '',
    image: '',
    price: '',
    link: false
  };

  dataPost = id => {
    axios
      .post(`http://localhost:8000/api/restaurants/${id}/foods`, {
        name: this.state.name,
        image: this.state.image,
        price: this.state.address,
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
          <h1>Tambahkan Makanan</h1>
          <Form>
            <Form.Field>
              <label>Nama Makanan</label>
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
              <label>Harga</label>
              <input
                placeholder="address"
                type="number"
                onChange={this.handleChange}
                name="address"
                value={this.state.address}
              />
            </Form.Field>
            <Button
              type="submit"
              onClick={() => {
                this.dataPost(this.props.match.params.id);
              }}>
              Submit
            </Button>
            <Button
              as={Link}
              to={`/restaurant/${this.props.match.params.id}/foods`}>
              Cancel
            </Button>
          </Form>
        </div>

        {this.state.link ? (
          <Redirect to={`/restaurant/${this.props.match.params.id}/foods`} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
