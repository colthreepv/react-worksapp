import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <input
        className={this.props.type}
        id={this.props.id}
        onChange={e => this.props.change(e)}
        value={this.props.value}
        placeholder={this.props.placeholder}
      />
    );
  }
}