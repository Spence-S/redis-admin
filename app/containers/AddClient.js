import React, { Component } from 'react';

export default class AddClient extends Component {
  state = {
    url: '',
    name: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>URL/connection string</label>
              <input
                className="form-control"
                name="url"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
