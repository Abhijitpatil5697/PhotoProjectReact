import React, { Component } from "react";
import HigherOrder from "./HigherOrder";
class MouseOver extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 onMouseMove={this.props.increment}>count-{this.props.count}</h1>
      </div>
    );
  }
}

export default HigherOrder(MouseOver, 5);
