import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLoadHomepage} from './../actions/index';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Welcome to Album Library App</h1>
          <p>Here you can find collection of music albums!</p>
          <p>
            <small>Click an see how many albums we have!</small>
          </p>
          <Link to="/albums/count" className="btn btn-primary">Number of Albums</Link>
        </div>
      </div>
    )
  }
}

export default Home;
