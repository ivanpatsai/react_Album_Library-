import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startGetNumber} from './../actions/index';

class Count extends Component {
  componentWillMount() {
    this.props.startGetNumber();
  }

  render() {
    if (!this.props.count) {
      console.log(this.props.count);
      return <div className="loader"></div>;
    }
    return (
      <div className="container text-center">
        <h1 className="page-header">
          Currently we have:
        </h1>
        <div className="count">{this.props.count}</div>
        <h1>Albums</h1>
        <p>Use top menu for navigation</p>
        <p>Click <strong>All Albums</strong> to see what we have</p>
        <p>Click on <strong>Add New Button</strong> to create your album</p>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.count.count
  }
}

export default connect(mapStateToProps, {startGetNumber})(Count);
