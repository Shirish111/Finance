import React from "react";
import { Divider } from "semantic-ui-react";
import "./Sell.css";

class Buy extends React.Component {
  render() {
    return (
      <div style={{ color: "white", padding: "10px" }}>
        <div className="row">
          <div className="col-lg-4">
            <label>Symbol:</label>
          </div>
          <div className="col-lg-8">
            <label>Symbol Description:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <input className="form-control" type="text" name="symbol" />
          </div>
          <div className="col-lg-8">
            <input
              className="form-control"
              type="text"
              name="symboldescription"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label>Size:</label>
          </div>
          <div className="col-lg-5">
            <label>Price Instruction:</label>
          </div>
          <div className="col-lg-3">
            <label>Limit:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <input className="form-control" type="number" name="size" />
          </div>
          <div className="col-lg-5">
            <select className="form-control">
              <option value="Limit">Limit</option>
              <option value="Limit Open">Limit Open</option>
              <option value="Limit Close">Limit Close</option>
              <option value="Market">Market</option>
              <option value="Market Open">Market Open</option>
              <option value="Market Close">Market Close</option>
            </select>
          </div>
          <div className="col-lg-3">
            <input className="form-control" type="text" name="limit" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label>Client:</label>
          </div>
          <div className="col-lg-8">
            <label>Client Description:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <select class="form-control">
              <option value="#001">#001</option>
            </select>
          </div>
          <div className="col-lg-8">
            <input
              className="form-control"
              type="text"
              name="clientDescription"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label>Exchange:</label>
          </div>
          <div className="col-lg-5">
            <label>Account:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <select className="form-control">
              <option value="NSE">NSE</option>
            </select>
          </div>
          <div className="col-lg-5">
            <select className="form-control">
              <option value="01">01</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <label>Counter Party:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <select className="form-control">
              <option value="C1">C1</option>
            </select>
          </div>
        </div>
        <div className="row" style={{ padding: "10px" }}>
          <div
            className="col-lg-12"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <Divider horizontal style={{ color: "white" }}>
              Time In Force
            </Divider>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label>TIF:</label>
          </div>
          <div className="col-lg-5">
            <label>TIF Date:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <select class="form-control">
              <option value="Day Order">Day Order</option>
            </select>
          </div>
          <div className="col-lg-5">
            <input
              type="date"
              className="form-control"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Buy;
