import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startFetchAlbum, startDeleteAlbum} from './../actions/index';
import {Link} from 'react-router-dom';


class AlbumDetails extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.startFetchAlbum(parseInt(this.props.match.params.id, 10));
  }

  onDeleteClick() {
    this.props.startDeleteAlbum(parseInt(this.props.match.params.id, 10))

  }

  render() {
    if (!this.props.album) {
      return (
        <div className="loader"></div>
      )
    }
    const {title, artist, country, company, price, year, id} = this.props.album;
    //use default image if logoUrl is empty
    const logoUrl = this.props.album.logoUrl ? this.props.album.logoUrl : "http://medreiting.ge/images/default_post.jpg"
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4">
            <div className="thumbnail">
              <img className="img-responsive img-rounded" src={logoUrl} alt="album logo"/>
              <div className="caption">
                <h3 className="page-header text-center">Title: {title}</h3>
                <h4>Artist: {artist}</h4>
                <p>Country: {country}</p>
                <p>Year: {year}</p>
                <p>Company: {company}</p>
                <h2 className="text-center">${price}</h2>
                <div className="row">
                  <div className="col-xs-6">
                    <Link to={`/albums/update/${id}`} className="btn btn-warning btn-block nopadding">
                      <span className="glyphicon glyphicon-pencil"></span> <span className="hidden-xs">Edit</span>
                    </Link>
                  </div>
                  <div className="col-xs-6">
                    <button className="btn btn-danger btn-block nopadding" onClick={this.onDeleteClick.bind(this)}>
                      <span className="glyphicon glyphicon-trash"></span> <span className="hidden-xs">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
function mapStateToProps(state) {
  return {
    album: state.albums.album
  };
}

export default connect(mapStateToProps, {startFetchAlbum, startDeleteAlbum})(AlbumDetails);
