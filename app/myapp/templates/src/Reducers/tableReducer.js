const tableReducer = (state, action) => {
  switch (action.type.type) {
    case "SORT":
      return sortTable1(state, action);
    case "SELECT_ORDER":
      return selectOrder(state, action);
    default:
      return state;
  }
};
function sortTable1(state, action) {
  var r1 = -1;
  var r2 = 1;
  var tableName = action.payload[0];
  var sortAsc = action.payload[2];
  if (!sortAsc) {
    r1 = 1;
    r2 = -1;
  }
  var id = action.payload[1];
  var table1 = getTableName(state, tableName);
  var state1 = { ...state };
  if (tableName === "Orders") {
    state1["Table"][tableName]["order_columns"] = [
      ...table1.order_columns.slice(0, id),
      { ...table1.order_columns[id], sortAsc: !sortAsc },
      ...table1.order_columns.slice(id + 1)
    ];
  } else if (tableName === "Fills") {
    state1["Table"]["Orders"]["fill_columns"] = [
      ...table1.fill_columns.slice(0, id),
      { ...table1.fill_columns[id], sortAsc: !sortAsc },
      ...table1.fill_columns.slice(id + 1)
    ];
  } else {
    state1["Table"][tableName]["columns"] = [
      ...table1.columns.slice(0, id),
      { ...table1.columns[id], sortAsc: !sortAsc },
      ...table1.columns.slice(id + 1)
    ];
  }
  if (tableName === "Orders") {
    var orderId_of_fills = table1.data[state1.Table.Fills].order_table[7];
    console.log(orderId_of_fills);
    console.log("ID =", id);
    state1["Table"][tableName]["data"] = table1.data.sort(function(x, y) {
      console.log(x, y);
      if (x.order_table[id] < y.order_table[id]) {
        return r1;
      }
      return r2;
    });
    for (var i in state1["Table"][tableName]["data"]) {
      state1["Table"][tableName]["data"][i]["id"] = i;
      if (
        state1["Table"][tableName]["data"][i]["order_table"][7] ===
        orderId_of_fills
      ) {
        state1["Table"]["Fills"] = i;
      }
    }
  } else if (tableName === "Fills") {
    state1["Table"]["Orders"]["data"][
      state1.Table.Fills
    ].fill_table = table1.data[state1.Table.Fills].fill_table.sort(function(
      x,
      y
    ) {
      if (x[id] < y[id]) {
        return r1;
      }
      return r2;
    });
  } else {
    state1["Table"][tableName]["data"] = table1.data.sort(function(x, y) {
      if (x[id] < y[id]) {
        return r1;
      }
      return r2;
    });
  }
  console.log(state1);
  return state1;
}
function getTableName(state, name) {
  switch (name) {
    case "Orders":
      return state.Table.Orders;
    case "Fills":
      return state.Table.Orders;
    case "TradeManagement":
      return state.Table.TradeManagement;
    case "PL":
      return state.Table.PL;
    default:
      console.log("Error in getting Table Name");
      return state.Table.Orders;
  }
}
function selectOrder(state, action) {
  return {
    ...state,
    Table: {
      ...state.Table,
      Fills: action.payload
    }
  };
}
export default tableReducer;
