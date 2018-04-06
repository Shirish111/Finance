const tableReducer = (state, action) => {
  switch (action.type.type) {
    case "SORT":
      return sortTable1(state, action);
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
  state1["Table"][tableName]["columns"] = [
    ...table1.columns.slice(0, id),
    { ...table1.columns[id], sortAsc: !sortAsc },
    ...table1.columns.slice(id + 1)
  ];
  state1["Table"][tableName]["data"] = table1.data.sort(function(x, y) {
    if (x[id] < y[id]) {
      return r1;
    }
    return r2;
  });
  return state1;
}
function getTableName(state, name) {
  switch (name) {
    case "Orders":
      return state.Table.Orders;
    case "Fills":
      return state.Table.Fills;
    case "TradeManagement":
      return state.Table.TradeManagement;
    case "PL":
      return state.Table.PL;
    default:
      console.log("Error in getting Table Name");
      return state.Table.Orders;
  }
}
export default tableReducer;
