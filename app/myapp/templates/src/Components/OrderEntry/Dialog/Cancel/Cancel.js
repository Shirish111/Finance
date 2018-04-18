import React from "react";
import { Divider } from "semantic-ui-react";
import "./Cancel.css";
import { connect } from "react-redux";

class Cancel extends React.Component {
  submitForm() {
    console.log("Submitting Form Cancel");
    console.log(this.state);
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  render() {
    return (
      <div
        className="text-center"
        style={{ height: "100px", color: "black", padding: "10px" }}
      >
        <p>
          Are you sure you want to cancel following ticket -<br /> Symbol=INFY
          Side=Cancel Size=100?
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    //initialized: state.Initialized
    //name: state.User.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //login1: payload => {
    //  dispatch(loginAction(payload));
    //}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cancel);
