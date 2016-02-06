import React from 'react';

export default class Drawing extends React.Component {
  render() {
    // return <div>HELLO</div>;
    return (<svg width="500" height="500">
      <circle cx="250" cy="250" r="200" stroke="black" fill="white"></circle>
    </svg>)
  }
}
