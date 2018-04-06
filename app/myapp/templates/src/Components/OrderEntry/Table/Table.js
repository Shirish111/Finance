import React, { Component } from "react";
import "./Table.css";
import { connect } from "react-redux";
import { tableAction } from "../../../Actions/tableAction";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: "C1", id: 0 },
        { name: "C2", id: 1 },
        { name: "C3", id: 2 },
        { name: "C4", id: 3 }
      ],
      data: [
        ["Mark", "d1", "d2", "d3"],
        ["Dustin", "d4", "d5", "d6"],
        ["Zend", "d7", "d8", "d9"],
        ["Stephen", "d13", "d14", "d15"],
        ["Pete", "d12", "d11", "d10"]
      ],
      prev: -1,
      ascSort: true
    };
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
  conditionalRendering1() {
    if (this.props.name === "Orders") {
      return (
        <tr>
          {this.props.orderColumns.map(c => {
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
        <tbody>
          {this.props.orderData.map(r => {
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
    } else if (this.props.name === "Fills") {
      return (
        <tbody>
          {this.props.fillsData.map(r => {
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
    orderColumns: state.Table.Orders.columns,
    fillsColumns: state.Table.Fills.columns,
    trademanagementColumns: state.Table.TradeManagement.columns,
    pLColumns: state.Table.PL.columns,
    orderData: state.Table.Orders.data,
    fillsData: state.Table.Fills.data,
    trademanagementData: state.Table.TradeManagement.data,
    pLData: state.Table.PL.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sortTable: payload => {
      dispatch(tableAction(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
