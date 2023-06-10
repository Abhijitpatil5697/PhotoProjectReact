import React, { Component } from "react";
import HigherOrder from "./HigherOrder";

class Increment extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>count-{this.props.count}</button>
      </div>
    );
  }
}

export default HigherOrder(Increment, 3);
