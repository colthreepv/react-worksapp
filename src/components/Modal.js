import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
      </div>
    );
  }
}
