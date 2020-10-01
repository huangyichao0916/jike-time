import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.styl';
import {Provider} from 'react-redux';
import store from '@/store/store';

import axios from 'axios';
import { addDataToMinePageActionCreator } from '@/store/action';

import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from '@/routes';

axios.get('/mine/mineItem.json')
  .then(res => res.data.items)
  .then(res => store.dispatch(addDataToMinePageActionCreator(res)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
