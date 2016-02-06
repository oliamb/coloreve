import './index.scss';
import React from 'react'; // FIXME: Not importing react is causing an error.
import ReactDOM from 'react-dom';
import App from './App.jsx'

main();

function main() {
    document.createElement('DIV')
    ReactDOM.render(<App />, document.getElementById('app'));
}
