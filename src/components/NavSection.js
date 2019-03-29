import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavSection extends Component {
  render() {
    return (
      <li
        onClick={() => {
          this.props.fn("second");
        }}
      >
        {this.props.children}
      </li>
    );
  }
}
NavSection.propTypes = {
  fn: PropTypes.func
};
