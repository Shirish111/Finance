import React, { Component } from "react";
import "./App.css";
import OrderEntry from "./Components/OrderEntry/OrderEntry";
import TradeManagement from "./Components/TradeManagement/TradeManagement";
import PL from "./Components/PL/PL";
import Dialog from "./Components/OrderEntry/Dialog/Dialog";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import { loggedInAction } from "./Actions/initialAction";

class App extends Component {
  constructor(props) {
    super(props);
    if (this.props.initialized === false) {
      this.props.isLoggedIn();
    }
  }
  conditionalRendering() {
    if (this.props.loggedIn === false) {
      //false
      return <Login />;
    } else {
      return (
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs" id="navid1">
              <li className="active">
                <a data-toggle="tab" href="#OrderEntry">
                  Order Entry
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#TradeManagement">
                  Trade Management
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#PL">
                  P&L
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="OrderEntry" className="tab-pane fade in active">
                <OrderEntry />
              </div>
              <div id="TradeManagement" className="tab-pane fade">
                <TradeManagement />
              </div>
              <div id="PL" className="tab-pane fade">
                <PL />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  style1 = {
    border: "1px solid white",
    backgroundColor: "#363636"
  };
  render() {
    return (
      <div className="App container-fluid" style={this.style1}>
        {this.conditionalRendering()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    initialized: state.Initialized,
    loggedIn: state.User.loggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //isLoggedIn: payload => {
    //   dispatch(loggedInAction(payload));
    //}
    isLoggedIn: payload => {
      dispatch(loggedInAction(dispatch));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
