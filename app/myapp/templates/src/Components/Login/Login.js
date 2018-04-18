import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../Actions/loginAction";
import { loggedInAction } from "../../Actions/initialAction";
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  style1 = {
    border: "1px solid white",
    backgroundColor: "#363636"
  };
  onChangeHandler(e) {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  }
  handleClick1(e) {
    console.log(this.state.username, this.state.password);
    (function(username, password, login1) {
      $.ajax({
        method: "POST",
        url: "http://127.0.0.1:8000/login",
        dataType: "json",
        data: { username: username, password: password },
        xhrFields: { withCredentials: true },
        success: function(data) {
          console.log("Succesfully fetched");
          //if (data.success) {
          login1([data.id, data.username]);
          //}
        }
      });
    })(this.state.username, this.state.password, this.props.login1);
  }
  render() {
    return (
      <div
        style={{
          minHeight: "750px",
          color: "white",
          backgroundColor: "#363636"
        }}
      >
        <div
          className="row text-center jumbotron"
          style={{ color: "white", backgroundColor: "#363636" }}
        >
          <h1>Login</h1>
          <p>{this.props.name}</p>
          <hr />
        </div>
        <div className="row" style={{}}>
          <div className="col-lg-4" style={{}} />
          <div className="col-lg-4" style={{}}>
            <div className="row" style={{}}>
              <div className="col-lg-12" style={{}}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.onChangeHandler(e)}
                />
              </div>
            </div>
            <div className="row" style={{ height: "20px" }} />
            <div className="row" style={{}}>
              <div className="col-lg-12">
                {" "}
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.onChangeHandler(e)}
                />
              </div>
            </div>
            <div className="row" style={{ height: "30px" }} />
            <div className="row" style={{}}>
              <div className="col-lg-12 text-center">
                <input
                  type="submit"
                  className="btn"
                  name="submit"
                  value="Login"
                  style={{ color: "white", backgroundColor: "black" }}
                  onClick={e => this.handleClick1(e)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4" style={{}} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    initialized: state.Initialized
    //name: state.User.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login1: payload => {
      dispatch(loginAction(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
