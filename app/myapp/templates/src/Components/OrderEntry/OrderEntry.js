import React, { Component } from "react";
import SideBar from "./SideBar/SideBar.js";
import Toolbar from "./Toolbar/Toolbar.js";
import Table from "./Table/Table.js";
import Dialog from "./Dialog/Dialog";
class OrderEntry extends Component {
  constructor() {
    super();
    this.state = {
      buttons1: [
        {
          name: "Buy Stock",
          key: "0"
        },
        {
          name: "Sell Stock",
          key: "1"
        }
      ],
      buttons2: [
        {
          name: "Modify",
          key: "2"
        },
        {
          name: "Cancel",
          key: "3"
        }
      ]
    };
  }
  styleRow = {
    backgroundColor: "#363636"
  };
  styleButton = {
    backgroundColor: "#363636",
    color: "white"
  };
  styleToolBar = {
    backgroundColor: "#717171"
  };
  render() {
    return (
      <div style={{ height: "750px" }}>
        <div className="row text-center" style={this.styleRow}>
          <div className="col-lg-1">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                style={this.styleButton}
              >
                File
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Save</a>
                </li>
                <li>
                  <a href="#">Exit</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                style={this.styleButton}
              >
                Settings
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Preferences</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" style={this.styleToolBar}>
          <Toolbar buttons={this.state.buttons1} />
        </div>
        <div class="row">
          <div
            class="col-lg-2"
            style={{
              borderRight: "2px solid white",
              minHeight: "600px",
              backgroundColor: "black"
            }}
          >
            <SideBar />
          </div>

          <div
            class="col-lg-10"
            style={{
              color: "white",
              backgroundColor: "#363636",
              border: "1px solid white"
            }}
          >
            <div class="row text-center">Orders</div>
            <div class="row" style={this.styleToolBar}>
              <Toolbar buttons={this.state.buttons2} />
            </div>
            <div
              class="row"
              style={{
                height: "250px",
                overflow: "scroll",
                backgroundColor: "black",
                color: "white"
              }}
            >
              <Table name="Orders" />
            </div>
            <div class="row text-center">Fills</div>
            <div class="row">
                <Dialog />
            </div>
            <div
              class="row"
              style={{
                height: "275px",
                backgroundColor: "black",
                overflow: "scroll"
              }}
            >
              <Table name="Fills" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderEntry;
