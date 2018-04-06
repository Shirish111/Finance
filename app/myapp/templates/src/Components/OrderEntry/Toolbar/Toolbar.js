import React, { Component } from "react";
import { dialogOpen } from "./../../../Actions/dialogAction";
import { connect } from "react-redux";

class Toolbar extends Component {
  styleToolBar = {
    backgroundColor: "#717171"
  };
  handleClick(e, key) {
    if (this.props.key === "-1") {
      console.log("Key = -1");
    } else {
      console.log("Key != -1");
    }
    //console.log(name)
    switch (key) {
      case "0":
        //action buy stock

        console.log("Buy stock");
        break;
      case "1":
        //action sell stock
        console.log("Sell stock");
        break;
      case "2":
        //action modify
        console.log("Modify stock");
        break;
      case "3":
        // action cancel
        console.log("Cancel stock");
        break;
      default:
        console.log("Invalid swich case");
    }
  }
  render() {
    return (
      <div>
        {this.props.buttons.map(b => {
          return (
            <div class="col-lg-1" key={b.key}>
              <button
                class="btn"
                style={{
                  color: "yellow",
                  backgroundColor: "#595959",
                  border: "1px solid white"
                }}
                onClick={e => this.props.dialog(b.name)}
              >
                {b.name}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
};
const mapDispatchToProps = dispatch => {
  return {
    dialog: payload => {
      dispatch(dialogOpen(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
