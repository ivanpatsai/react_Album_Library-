import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

import {startUpdateAlbum} from './../actions/index';

const renderInput = field =>
  <div>
    <input {...field.input} className="form-control" type={field.type}/>
    {field.meta.touched &&
    field.meta.error &&
    field.meta.invalid &&
    <div className="help-block error">
      {field.meta.touched ? field.meta.error : field.meta.invalid ? field.meta.error : ''}
    </div>}
  </div>;

class EditAlbum extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      "title": this.props.album.title,
      "artist": this.props.album.artist,
      "country": this.props.album.country,
      "company": this.props.album.company,
      "price": this.props.album.price,
      "year": this.props.album.year,
      "logoUrl": this.props.album.logoUrl ? this.props.album.logoUrl : ''
    };

    this.props.initialize(initData);
  }

  onSubmit(props) {
    this.props.startUpdateAlbum(props, this.props.match.params.id)
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Create A New Album</h3>
            <div className="form-group">
              <label>Logo URL</label>
              <Field
                name="logoUrl"
                component={renderInput}
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <Field
                name="title"
                component={renderInput}
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Artist</label>
              <Field
                name="artist"
                component={renderInput}
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <Field
                name="country"
                component={renderInput}
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <Field
                name="company"
                component={renderInput}
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <Field
                name="price"
                component={renderInput}
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Year</label>
              <Field
                name="year"
                component={renderInput}
                type="text"
              />
            </div>

            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please, enter a name of the album';
  }
  if (!values.country) {
    errors.country = 'Please, enter a country';
  }
  if (!values.artist) {
    errors.artist = 'Please, enter a name of the artist';
  }
  if (!values.company) {
    errors.company = 'Please, enter a name of the company';
  }
  if (values.price % 1 !== 0) {
    errors.price = 'Price must be decimal';
  }
  if (!values.price) {
    errors.price = 'Please, enter a price';
  }
  if (!values.year) {
    errors.year = 'Please, enter a year of release';
  }


  return errors;
}

function mapStateToProps(state) {
  return {
    album: state.albums.album
  }
}

EditAlbum = reduxForm({
  form: 'EditAlbum',
  validate
})(EditAlbum);
EditAlbum = connect(mapStateToProps, {startUpdateAlbum})(EditAlbum);
export default EditAlbum;