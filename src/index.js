import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import calcul from './redux/reducer';

let store = createStore(calcul,applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
