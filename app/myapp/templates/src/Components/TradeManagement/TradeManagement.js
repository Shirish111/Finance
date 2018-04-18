import React, { Component } from "react";
import Table from "./../OrderEntry/Table/Table.js";

class TradeManagement extends Component {
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
        <div class="row text-center">
          <div class="col-lg-12">
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
            <Table name="TradeManagement" />
          </div>
        </div>
      </div>
    );
  }
}

export default TradeManagement;
