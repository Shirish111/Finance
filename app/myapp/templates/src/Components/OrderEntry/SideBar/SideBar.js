import React, { Component } from "react";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      val: "Symbol"
    };
  }
  style1 = {
    border: "1px solid white",
    backgroundColor: "#363636"
  };
  handleChange(e) {
    this.setState({ val: e.target.value });
  }
  conditionalRendering() {
    switch (this.state.val) {
      case "Symbol":
        return <div style={{ color: "white" }}>Symbols Rendered</div>;
      case "Side":
        return <div style={{ color: "white" }}>Side Rendered</div>;
      case "Client":
        return <div style={{ color: "white" }}>Client Rendered</div>;
      case "Product Type":
        return <div style={{ color: "white" }}>Product Type Rendered</div>;
      case "State":
        return <div style={{ color: "white" }}>State Rendered</div>;
      default:
        console.log("Error in SideBar.js")
    }
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <select
          id="selectid"
          class="selectpicker"
          style={{ width: "100%", marginTop: "10px" }}
          onChange={e => this.handleChange(e)}
        >
          <option value="Symbol">Symbol</option>
          <option value="Side">Side</option>
          <option value="Client">Client</option>
          <option value="Product Type">Product Type</option>
          <option value="State">State</option>
        </select>
        {this.conditionalRendering()}
      </div>
    );
  }
}

export default SideBar;
