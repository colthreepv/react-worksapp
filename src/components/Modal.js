import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="modal">
        <img src={this.props.img} alt="profile-pic" />
      </div>
    );
  }
}
Modal.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string
};