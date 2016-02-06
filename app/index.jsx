import './index.scss';
import React from 'react'; // FIXME: Not importing react is causing an error.

import ReactDOM from 'react-dom';
import PageTitle from './PageTitle.jsx';

main();

function main() {
    document.createElement('DIV')
    ReactDOM.render(<PageTitle title="Coloreve" />, document.getElementById('app'));
}
