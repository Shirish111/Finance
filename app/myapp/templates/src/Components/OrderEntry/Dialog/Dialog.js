import React, { Component } from "react";
import "./Dialog.css";
import { connect } from "react-redux";
import Buy from "./Buy/Buy.js";
import Sell from "./Sell/Sell.js";
import Modify from "./Modify/Modify.js";
import Notify from "./Notify/Notify.js";
import { Button, Modal, Icon } from "semantic-ui-react";
import { dialogCloseAction } from "./../../../Actions/dialogAction";
import Cancel from "./Cancel/Cancel.js";

class Dialog extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  openModal(e) {
    this.setState({ isOpen: true });
  }
  onClickHandler() {
    this.child.submitForm();
  }
  componentDidMount() {
    console.log("Key = ", this.props.name);
    if (this.props.name !== "None") {
      switch (this.props.name) {
        case "Buy Stock":
          //Buy Dialog
          this.setState({ isOpen: true });
          console.log(this.state);
          break;
        case "1":
          //Sell Dialog
          break;
        case "2":
          //Modify Dialog
          break;
        case "3":
          //Cancel Dialog
          break;
        default:
          console.log("Invalid switch case");
      }
    }
  }
  getColor() {
    switch (this.props.name) {
      case "Buy":
        return "#2b0089";
      case "Sell":
      case "Modify":
        return "#b90000";
      case "Cancel":
      case "Notify":
        return "#f0f0f0";
    }
  }
  conditionalRendering() {
    if (this.props.active) {
      switch (this.props.name) {
        case "Buy":
          return (
            <div style={{ backgroundColor: "#3B00BE" }}>
              <Buy onRef={e => (this.child = e)} />
            </div>
          );
        case "Sell":
          return (
            <div style={{ backgroundColor: "#e90000" }}>
              <Sell onRef={e => (this.child = e)} />
            </div>
          );
        case "Modify":
          return (
            <div style={{ backgroundColor: "#e90000" }}>
              <Modify onRef={e => (this.child = e)} />
            </div>
          );
        case "Cancel":
          return (
            <div style={{ backgroundColor: "#ffffff" }}>
              <Cancel onRef={e => (this.child = e)} />
            </div>
          );
        case "Notify":
          return (
            <div style={{ backgroundColor: "#ffffff" }}>
              <Notify onRef={e => (this.child = e)} />
            </div>
          );
        default:
          console.log("Error in Dialog.js");
      }
    }
  }
  conditionalRendering2(name) {
    if (name == "Ok") {
      if (this.props.name === "Cancel") {
        return "Yes";
      } else {
        return "Ok";
      }
    } else {
      if (this.props.name === "Cancel") {
        return "No";
      } else {
        return "Cancel";
      }
    }
  }
  render() {
    return (
      <Modal
        open={this.props.active}
        style={{
          //width: this.props.width,
          height: this.props.height,
          backgroundColor: "#ACC3E2"
        }}
        onClose={e => this.props.dialogClose1("Close Dialog")}
      >
        <Modal.Header
          style={{
            height: "40px",
            padding: "0px",
            margin: "0px",
            backgroundColor: "#ACC3E2"
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              padding: "10px",
              border: "0px solid black"
            }}
          >
            <div style={{ flex: "1" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: "1" }}>
                  <Icon name="user" />
                </div>
                <div style={{ flex: "1" }}>{this.props.name}</div>
              </div>
            </div>
            <div style={{ flex: "20" }}> </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                border: "0px solid black"
              }}
            >
              <div style={{ flex: "1" }}>
                <Icon
                  name="remove"
                  onClick={e =>
                    this.props.dialogClose1({
                      name: "close_dialog",
                      status: true
                    })
                  }
                />
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Content
          style={{
            backgroundColor: "#ACC3E2",
            padding: "10px",
            paddingBottom: "0px",
            paddingTop: "0px"
          }}
        >
          <div style={{ backgroundColor: "#3B00BE" }}>
            {this.conditionalRendering()}
          </div>
        </Modal.Content>
        <Modal.Actions
          style={{
            backgroundColor: "#ACC3E2",
            padding: "10px",
            paddingTop: "0px",
            margin: "0px"
          }}
        >
          <div
            class="text-center"
            style={{ backgroundColor: this.getColor(), padding: "10px" }}
          >
            <Button
              onClick={e => this.onClickHandler()}
              style={{ backgroundColor: "black", color: "white" }}
            >
              {this.conditionalRendering2("Ok")}
            </Button>
            <Button
              className="cancel"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={e => this.props.dialogClose1("Close Dialog")}
            >
              {this.conditionalRendering2("Cancel")}
            </Button>
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    width: state.Dialog.width,
    height: state.Dialog.height,
    active: state.Dialog.active,
    name: state.Dialog.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dialogClose1: payload => {
      dispatch(dialogCloseAction(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
