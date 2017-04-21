import React from 'react';
import {Link} from 'react-router-dom'

export default (props) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/"><span className="glyphicon glyphicon-music" aria-hidden="true"></span> Albums Library</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">
                <span className="glyphicon glyphicon-home"></span> Home
              </Link>
            </li>
            <li>
              <Link to="/albums/all">
                <span className="glyphicon glyphicon-list"></span> All Albums
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right hidden-xs">
            <li>
              <Link to="/albums/add">
                <span className="glyphicon glyphicon-plus"></span> Add New Album
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
