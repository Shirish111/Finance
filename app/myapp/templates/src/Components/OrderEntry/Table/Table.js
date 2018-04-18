import React, { Component } from "react";
import "./Table.css";
import { connect } from "react-redux";
import { tableAction } from "../../../Actions/tableAction";
import { selectOrderAction } from "../../../Actions/selectOrderAction.js";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(e, id) {
    var r1 = -1;
    var r2 = 1;
    if (this.state.prev === id) {
      this.setState({ ascSort: !this.state.ascSort });
    } else {
      this.setState({ ascSort: true });
    }
    if (!this.state.ascSort) {
      r1 = 1;
      r2 = -1;
    }
    this.setState({
      data: this.state.data.sort(function(x, y) {
        if (x[id] < y[id]) {
          return r1;
        }
        return r2;
      })
    });
    this.setState({ prev: id });
  }
  selectOrder(id) {
    if (id !== this.props.fills) {
      this.props.selectOrder(id);
    }
  }
  conditionalRendering1() {
    if (this.props.name === "Orders") {
      return (
        <tr>
          {this.props.orderColumns.map(c => {
            if (c.id != "15") {
              return (
                <th
                  key={c.id}
                  onClick={e =>
                    this.props.sortTable([this.props.name, c.id, c.sortAsc])
                  }
                >
                  {c.name}
                </th>
              );
            }
          })}
        </tr>
      );
    } else if (this.props.name === "Fills") {
      return (
        <tr>
          {this.props.fillsColumns.map(c => {
            return (
              <th
                key={c.id}
                onClick={e =>
                  this.props.sortTable([this.props.name, c.id, c.sortAsc])
                }
              >
                {c.name}
              </th>
            );
          })}
        </tr>
      );
    } else if (this.props.name === "TradeManagement") {
      return (
        <tr>
          {this.props.trademanagementColumns.map(c => {
            return (
              <th
                key={c.id}
                onClick={e =>
                  this.props.sortTable([this.props.name, c.id, c.sortAsc])
                }
              >
                {c.name}
              </th>
            );
          })}
        </tr>
      );
    } else if (this.props.name === "PL") {
      return (
        <tr>
          {this.props.pLColumns.map(c => {
            return (
              <th
                key={c.id}
                onClick={e =>
                  this.props.sortTable([this.props.name, c.id, c.sortAsc])
                }
              >
                {c.name}
              </th>
            );
          })}
        </tr>
      );
    }
  }
  conditionalRendering2() {
    if (this.props.name === "Orders") {
      return (
        <tbody id="orders">
          {this.props.orderData.map(r => {
            if (r.id === this.props.fills) {
              return (
                <tr
                  class="active"
                  key={r[0]}
                  onClick={e => this.selectOrder(r.id)}
                >
                  {r.order_table.map((rv, i) => {
                    console.log(rv);
                    return <td key={i}>{rv}</td>;
                  })}
                </tr>
              );
            } else {
              return (
                <tr key={r[0]} onClick={e => this.selectOrder(r.id)}>
                  {r.order_table.map((rv, i) => {
                    console.log(rv);
                    return <td key={i}>{rv}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      );
    } else if (this.props.name === "Fills") {
      return (
        <tbody>
          {this.props.orderData[this.props.fills].fill_table.map(r => {
            return (
              <tr>
                {r.map(rv => {
                  return <td key={rv}>{rv}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      );
    } else if (this.props.name === "TradeManagement") {
      return (
        <tbody>
          {this.props.trademanagementData.map(r => {
            return (
              <tr key={r[0]}>
                {r.map(rv => {
                  return <td key={rv}>{rv}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      );
    } else if (this.props.name === "PL") {
      return (
        <tbody>
          {this.props.pLData.map(r => {
            return (
              <tr key={r[0]}>
                {r.map(rv => {
                  return <td key={rv}>{rv}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      );
    }
  }
  render() {
    return (
      <div className="App">
        <table className="table  table-condensed table-hover">
          <thead>{this.conditionalRendering1()}</thead>
          {this.conditionalRendering2()}
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    orderColumns: state.Table.Orders.order_columns,
    fillsColumns: state.Table.Orders.fill_columns,
    trademanagementColumns: state.Table.TradeManagement.columns,
    pLColumns: state.Table.PL.columns,
    orderData: state.Table.Orders.data,
    fills: state.Table.Fills,
    trademanagementData: state.Table.TradeManagement.data,
    pLData: state.Table.PL.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sortTable: payload => {
      dispatch(tableAction(payload));
    },
    selectOrder: payload => {
      dispatch(selectOrderAction(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
