import React, { Component } from "react";
import Table from "./../OrderEntry/Table/Table.js";

class PL extends Component {
  constructor() {
    super();
    this.state = {
      buttons1: [
        {
          name: "Refresh Now",
          key: "0"
        }
      ]
    };
  }
  style1 = {
    border: "1px solid white",
    backgroundColor: "#363636"
  };
  render() {
    return (
      <div style={{ minHeight: "750px" }}>
        <div class="row ">
          <div class="col-lg-6 text-right" style={{ color: "white" }}>
            <label>Account: </label>
            <select class="selectpicker" style={{ color: "black" }}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>{" "}
            </select>
          </div>
          <div class="col-lg-6 float-left">
            <button
              class="btn"
              style={{
                color: "yellow",
                backgroundColor: "#595959",
                border: "1px solid white"
              }}
            >
              Refresh Now
            </button>
          </div>
        </div>
        <div
          class="row"
          style={{
            maxHeight: "600px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          <div class="col-lg-12">
            <Table name="PL" />
          </div>
        </div>
      </div>
    );
  }
}

export default PL;
