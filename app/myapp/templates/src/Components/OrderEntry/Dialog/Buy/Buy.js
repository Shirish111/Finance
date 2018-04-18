import React from "react";
import { Divider } from "semantic-ui-react";
import "./Buy.css";
import $ from "jquery";
import { connect } from "react-redux";
import { dialogOpenAction } from "./../../../../Actions/dialogAction";
import { dialogCloseAction } from "./../../../../Actions/dialogAction";


class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      symbolDesc: "",
      Size: 0,
      PriceInstruction: "Limit",
      Limit: 0,
      Client: "#001",
      ClientDesc: "",
      Exchange: "",
      Account: "01",
      CounterParty: "C1",
      TIF: "Day Order",
      TIFDate: "2018-04-30"
    };
  }
  componentDidMount() {
    this.props.onRef(this)
  }

  onChangeHandler(e, name) {
    switch (name) {
      case "symbol":
        this.setState({ symbol: e.target.value });
        break;
      case "symbolDesc":
        this.setState({ symbolDesc: e.target.value });
        break;
      case "Size":
        this.setState({ Size: e.target.value });
        break;
      case "PriceInstruction":
        this.setState({ PriceInstruction: e.target.value });
        break;
      case "Limit":
        this.setState({ Limit: e.target.value });
        break;
      case "Client":
        this.setState({ Client: e.target.value });
        break;
      case "ClientDesc":
        this.setState({ ClientDesc: e.target.value });
        break;
      case "Exchange":
        this.setState({ Exchange: e.target.value });
        break;
      case "Account":
        this.setState({ Account: e.target.value });
        break;
      case "CounterParty":
        this.setState({ CounterParty: e.target.value });
        break;
      case "TIF":
        this.setState({ TIF: e.target.value });
        break;
      case "TIFDate":
        this.setState({ TIFDate: e.target.value });
        break;
      default:
        console.log("Default Case executed in Buy.js");
    }
  }
  submitForm() {
    console.log("Submitting Form Buy");
    console.log(this.state);
    (function (id1, product_id, side, ask_price, total_qty, dialog) {
      $.ajax({
        method: "POST",
        url: "http://127.0.0.1:8000/tmp",
        dataType: "json",
        data: {
          type: 1,
          'order_id': "",
          'user_id': id1,
          'product_id': "",
          'side': side,
          'ask_price': ask_price,
          'total_qty': total_qty
        },
        xhrFields: { withCredentials: true },
        success: function (data) {
          console.log("Succesfully fetched");
          //if (data.success) {
          dialog({ name: "Notify", status: data.success });
          //}
        }
      });
    })(this.state.Client, this.state.symbol, 0, this.state.Limit, this.state.Size, this.props.dialog);//(or client id), 0 for Buy
    this.props.dialogClose1({name:"close_dialog", status:true});
  }
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
            <input
              className="form-control"
              type="text"
              name="symbol"
              value={this.state.symbol}
              onChange={e => this.onChangeHandler(e, "symbol")}
            />
          </div>
          <div className="col-lg-8">
            <input
              className="form-control"
              type="text"
              name="symboldescription"
              value={this.state.symbolDesc}
              onChange={e => this.onChangeHandler(e, "symbolDesc")}
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
            <input
              value={this.state.Size}
              onChange={e => this.onChangeHandler(e, "Size")}
              className="form-control"
              type="number"
              name="size"
            />
          </div>
          <div className="col-lg-5">
            <select
              value={this.state.PriceInstruction}
              onChange={e => this.onChangeHandler(e, "PriceInstruction")}
              className="form-control"
            >
              <option value="Limit">Limit</option>
              <option value="Limit Open">Limit Open</option>
              <option value="Limit Close">Limit Close</option>
              <option value="Market">Market</option>
              <option value="Market Open">Market Open</option>
              <option value="Market Close">Market Close</option>
            </select>
          </div>
          <div className="col-lg-3">
            <input
              className="form-control"
              value={this.state.Limit}
              onChange={e => this.onChangeHandler(e, "Limit")}
              type="text"
              name="limit"
            />
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
            <select
              value={this.state.Client}
              onChange={e => this.onChangeHandler(e, "Client")}
              className="form-control"
            >
              <option value="#001">#001</option>
            </select>
          </div>
          <div className="col-lg-8">
            <input
              className="form-control"
              type="text"
              name="clientDescription"
              value={this.state.ClientDesc}
              onChange={e => this.onChangeHandler(e, "ClientDesc")}
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
            <select
              value={this.state.Exchange}
              onChange={e => this.onChangeHandler(e, "Exchange")}
              className="form-control"
            >
              <option value="NSE">NSE</option>
              <option value="BSE">BSE</option>
            </select>
          </div>
          <div className="col-lg-5">
            <select
              value={this.state.Account}
              onChange={e => this.onChangeHandler(e, "Account")}
              className="form-control"
            >
              <option value="01">01</option>
              <option value="02">02</option>
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
            <select
              value={this.state.CounterParty}
              onChange={e => this.onChangeHandler(e, "CounterParty")}
              className="form-control"
            >
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
            <select
              value={this.state.TIF}
              onChange={e => this.onChangeHandler(e, "TIF")}
              className="form-control"
            >
              <option value="Day Order">Day Order</option>
            </select>
          </div>
          <div className="col-lg-5">
            <input
              type="date"
              className="form-control"
              style={{ backgroundColor: "black", color: "white" }}
              value={this.state.TIFDate}
              onChange={e => this.onChangeHandler(e, "TIFDate")}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    id1: state.User.id
    //name: state.User.name
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dialog: payload => {
      dispatch(dialogOpenAction(payload));
    },
    dialogClose1: payload => {
      dispatch(dialogCloseAction(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buy);
