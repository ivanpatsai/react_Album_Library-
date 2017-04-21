import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroller';
import {startFetchAlbums} from './../actions/index';


class AlbumList extends Component {


  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.startFetchAlbums();
  }

  render() {
    const {albums} = this.props;
    if (albums === null || albums.length === 0) {
      return <div className="loader"></div>;
    }
    const renderAlbums = () => {
      //last item of the array is the first item on the page
      return albums.slice(0).reverse().map((album) => {
        return (
        <div
          className="col-sm-4 col-xs-12 col-md-3"
          key={album.id}
        >
          <Link
            // className="list-group-item"
            to={`/albums/${album.id}`}>
            <div className="thumbnail">
              <img
                className="img-responsive hidden-xs"
                src={album.logoUrl ? album.logoUrl : "http://medreiting.ge/images/default_post.jpg"}
                alt=""
              />
              <hr className="hidden-xs"/>
              <div className="caption">
                <h4 className="text-center">{album.title}</h4>
                <h4 className="text-center">${album.price}</h4>
              </div>
            </div>
          </Link>
        </div>
        )
      })
    };
    return (
      <div>
        <div className="text-center visible-xs btn_add">
          <Link to="/albums/add" className="btn btn-success btn-block nopadding">
            <span className="glyphicon glyphicon-plus"></span> Add New Album
          </Link>
        </div>
        <div>
          {/*<InfiniteScroll*/}
          {/*pageStart={0}*/}
          {/*loadMore={renderAlbums}*/}
          {/*hasMore={true || false}*/}
          {/*loader={<div className="loader">Loading ...</div>}*/}
          {/*>*/}
          <div className="row row-thmbl">
            {renderAlbums()}
          </div>
          {/*</InfiniteScroll>*/}

        </div>
      </div>

    );
  };
}

function mapStateToProps(state) {
  return {
    albums: state.albums.all
  }
}


export default connect(mapStateToProps, {startFetchAlbums})(AlbumList);