import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import TodoListApp from './container/TodoListApp';
import BtStrap from './components/Teste';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BtStrap />, document.getElementById('root'));
ReactDOM.render(<TodoListApp />, document.getElementById('todo_list'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
