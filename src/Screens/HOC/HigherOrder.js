import React, { Component } from "react";

const HigherOrder = (Functions, countNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    increment = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + countNumber,
        };
      });
    };
    render() {
      return (
        <Functions
          increment={this.increment}
          count={this.state.count}
        ></Functions>
      );
    }
  }
  return NewComponent;
};

export default HigherOrder;
