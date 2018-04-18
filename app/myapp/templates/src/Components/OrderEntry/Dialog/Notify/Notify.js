import React from "react";
import "./Notify.css";
import { connect } from "react-redux";
import { dialogCloseAction } from "./../../../../Actions/dialogAction";

class Notify extends React.Component {
  constructor(props) {
    super(props);
    this.props.onRef(this);
  }
  submitForm() {
    this.props.dialogClose1({ name: "cancel_dialog", status: true });
  }
  conditionalRendering() {
    if (this.props.status) {
      return <h1 style={{ color: "green" }}>Successful!</h1>;
    } else {
      return <h1 style={{ color: "red" }}>Failed!</h1>;
    }
  }
  render() {
    return (
      <div
        className="text-center"
        style={{ height: "100px", color: "black", padding: "10px" }}
      >
        {this.conditionalRendering()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    //initialized: state.Initialized
    status: state.Dialog.msg
    //name: state.User.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dialogClose1: payload => {
      dispatch(dialogCloseAction(payload));
    }
    //login1: payload => {
    //  dispatch(loginAction(payload));
    //}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Notify);
