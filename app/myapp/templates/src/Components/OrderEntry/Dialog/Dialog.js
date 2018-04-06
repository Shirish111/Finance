import React, { Component } from "react";
import "./Dialog.css";
import { connect } from "react-redux";
import Buy from "./Buy/Buy.js";
import Sell from "./Sell/Sell.js";
import Modify from "./Modify/Modify.js";
import { Button, Modal, Icon } from "semantic-ui-react";
import { dialogClose } from "./../../../Actions/dialogAction";

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
  conditionalRendering() {
    if (this.props.active) {
      switch (this.props.name) {
        case "Buy":
          return <Buy />;
        case "Sell":
          return <Sell />;
        case "Modify":
          return <Modify />;
        default:
          console.log("Error in Dialog.js")
      }
    }
  }
  render() {
    return (
      <Modal
        open={this.props.active}
        style={{
          height: this.props.height,
          backgroundColor: "#ACC3E2"
        }}
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
                  onClick={e => this.props.dialogClose1("Close Dialog")}
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
            style={{ backgroundColor: "#2C008C", padding: "10px" }}
          >
            <Button style={{ backgroundColor: "black", color: "white" }}>
              Ok
            </Button>
            <Button
              className="cancel"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={e => this.props.dialogClose1("Close Dialog")}
            >
              Cancel
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
    height: state.Dialog.height,
    active: state.Dialog.active,
    name: state.Dialog.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dialogClose1: payload => {
      dispatch(dialogClose(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
