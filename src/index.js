import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider} from 'notistack';
import { createStore } from 'redux'
import rootReducer from './redx/reducers'
import { Provider } from 'react-redux'
import { BrowserRouter as Route } from 'react-router-dom'

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
<Route>
<Provider store={store}>
<SnackbarProvider maxSnack={1} anchorOrigin={{vertical: 'top', horizontal: 'right'}} >
    <App />
</SnackbarProvider>
</Provider>
</Route>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
