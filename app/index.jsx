import './index.scss';
import React from 'react'; // FIXME: Not importing react is causing an error.

import ReactDOM from 'react-dom';
import Hello from './Component.jsx';

main();

function main() {
    document.createElement('DIV')
    ReactDOM.render(<Hello />, document.getElementById('app'));
}
