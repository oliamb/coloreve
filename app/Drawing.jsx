import React from 'react';

export default class Drawing extends React.Component {
  constructor() {
    super();
    this.state = {color: '#ffffff'};
  }

  handleClick(event) {
    var className = event.target.getAttribute('class');
    if (!className.match(/shape/)) {
      return;
    }
    event.stopPropagation();
    var color = '#';
    for (var i = 0; i < 3; i++) {
      color += Math.round(Math.random()*255).toString(16);
    }
    this.setState({color: color});
  }

  render() {
    return <div className="canvas" onClick={this.handleClick.bind(this)}>
      <h2 style={{color: this.state.color}}>{this.state.color}</h2>
      <svg width="500" height="500">
        <circle className="shape" cx="250" cy="250" r="200" stroke="black" fill={this.state.color}></circle>
      </svg>
    </div>
  }
}
