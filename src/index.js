//react stuff
import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';

//tools from libraries
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//redux reducer
import { appReducer } from './redux/appReducer'

//styling
import './index.css';

const store = createStore(appReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
document.getElementById('root'));
