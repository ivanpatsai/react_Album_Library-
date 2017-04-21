import axios from 'axios';
import history from './../history/history';

export const fetchAlbum = (album) => {
  return {
    type: 'FETCH_ALBUM',
    payload: album
  }
};

export const startFetchAlbum = (id) => {
  return (dispatch, getState) => {
    axios.get(`/get/${id}`).then(function ({data}) {
      dispatch(fetchAlbum(data));
    });
  };
};

export const fetchAlbums = (albums) => {
  return (
    {
      type: 'FETCH_ALBUMS',
      payload: albums
    }
  )
};

export const startFetchAlbums = () => {
  return (dispatch, getState) => {
    axios.get('/all').then(function ({data}) {
      const albums = data;
      const parsedAlbums = [];

      Object.keys(albums).forEach((albumID) => {
        parsedAlbums.push({
          ...albums[albumID]
        });
      });
      dispatch(fetchAlbums(parsedAlbums));
    });
  };
};

export const deleteAlbum = () => {
  return {
    type: 'DELETE_ALBUM'
  }
};

export const startDeleteAlbum = (id) => {
  return (dispatch, getState) => {
    axios.delete(`/delete/${id}`).then(function (response) {
      history.push('/albums/all');
      dispatch(deleteAlbum());
    });
  };
};

export const addAlbum = () => {
  return {
    type: 'ADD_ALBUM'
  }
};

export const startAddAlbum = (props) => {
  return (dispatch, getState) => {
    axios.post('/add', props).then(function (response) {
      history.push('/albums/all');
      dispatch(addAlbum());
    })
  }
};

export const updateAlbum = () => {
  return {
    type: 'UPDATE_ALBUM'
  }
};

export const startUpdateAlbum = (props, id) => {
  return (dispatch, getState) => {
    axios.post(`/update/${id}`, props).then(function (response) {
      history.push(`/albums/${id}`);
      dispatch(updateAlbum());
    })
  }
};

export const getNumber = (count) => {
  return {
    type: 'GET_NUMBER',
    payload: count
  }
};

export const startGetNumber = () => {
  return (dispatch, getState) => {
      axios.get(`/count`).then(function (response) {
        dispatch(getNumber(response.data.value));
      })
  }
};