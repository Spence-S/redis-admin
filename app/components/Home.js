import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddClient from './AddClient';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <h2>Redis Admin</h2>
        </div>
        <div className="row">
          <Link to="addclients">
            <AddClient />
          </Link>
          <Link to="listy">
            <div> idk </div>
          </Link>
        </div>
      </div>
    );
  }
}
