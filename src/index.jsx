import './style/app.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

import AlbumList from './components/AlbumList';
import Count from './components/Count';
import AlbumDetails from './components/AlbumDetails';
import Home from './components/Home';
import AddAlbum from './components/AddAlbum';
import EditAlbum from './components/EditAlbum';

import App from './components/App';
const store = require('./reducers/index').configure();


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/albums/all' component={AlbumList}/>
          <Route path='/albums/add' component={AddAlbum}/>
          <Route path='/albums/update/:id' component={EditAlbum}/>
          <Route path='/albums/count' component={Count}/>
          <Route path='/albums/:id' component={AlbumDetails}/>
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);