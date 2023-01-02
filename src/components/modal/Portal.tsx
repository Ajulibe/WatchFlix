// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";

// TODO:Refactor to make modal use react portals.
const modalRoot = document.getElementById("portal");

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
