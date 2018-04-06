//import AppBeginnerReducer from "./AppBeginningReducer";
//import HeaderReducer from "./HeaderReducer";
//import NavigationReducer from "./NavigationReducer";
//import isLoggedIn from "./loggedIn";
//import InitialSettingsReducer from "./InitialSettingsReducer";
import loginReducer from "./loginReducer";
import dialogReducer from "./dialogReducer";
import tableReducer from "./tableReducer";
import initialReducer from "./initialReducer"

const reducer = (
  state = {
    Initialized: false,
    User: {
      loggedIn: false
    },
    Dialog: {
      active: false,
      name: "",
      height: ""
    },
    Table: {
      Orders: {
        columns: [
          { id: 0, name: "Side", sortAsc: true },
          { id: 1, name: "State", sortAsc: true },
          { id: 2, name: "Symbol", sortAsc: true },
          { id: 3, name: "Client", sortAsc: true },
          { id: 4, name: "Size", sortAsc: true },
          { id: 5, name: "QtyDone", sortAsc: true },
          { id: 6, name: "QtyOpen", sortAsc: true },
          { id: 7, name: "OrderId", sortAsc: true },
          { id: 8, name: "PriceInstruction", sortAsc: true },
          { id: 9, name: "Exchange", sortAsc: true },
          { id: 10, name: "OrderStamp", sortAsc: true },
          { id: 11, name: "ProductType", sortAsc: true },
          { id: 12, name: "Ask", sortAsc: true },
          { id: 13, name: "Bid", sortAsc: true },
          { id: 14, name: "LTP", sortAsc: true }
        ],
        data: [
          [
            "B",
            "LIVE",
            "RIL",
            "ASCP",
            100,
            0,
            5000,
            "234567dfghjt75tg-7yhb65rfg",
            "MKT",
            "BSE",
            "1/15/2008 12:55:32 PM",
            "Stock",
            1.2,
            1.25,
            1.2
          ],
          [
            "S",
            "FILLED",
            "TALCO",
            "DAPB",
            100,
            300,
            5000,
            "12-34wasdfg1234562132435d",
            "MKT",
            "NSE",
            "1/15/2008 12:55:32 PM",
            "Stock",
            1.5,
            1.55,
            1.5
          ]
        ]
      },
      Fills: {
        columns: [
          { id: 0, name: "OrderId", sortAsc: true },
          { id: 1, name: "QtyDone", sortAsc: true },
          { id: 2, name: "Exchange", sortAsc: true },
          { id: 3, name: "Stamp", sortAsc: true },
          { id: 4, name: "Price", sortAsc: true },
          { id: 5, name: "FillId", sortAsc: true }
        ],
        data: [
          [
            "234567dfghjt75tg-7yhb65rfg",
            150,
            "NSE",
            "1/15/2008 12:55:32 PM",
            1.45,
            "12345fdsq23e4rtg70-1"
          ]
        ]
      },
      TradeManagement: {
        columns: [
          { id: 0, name: "TradeID", sortAsc: true },
          { id: 1, name: "OrderID", sortAsc: true },
          { id: 2, name: "FillId", sortAsc: true },
          { id: 3, name: "Account", sortAsc: true },
          { id: 4, name: "Symbol", sortAsc: true },
          { id: 5, name: "Side", sortAsc: true },
          { id: 6, name: "QtyDone", sortAsc: true },
          { id: 7, name: "Price", sortAsc: true },
          { id: 8, name: "CounterParty", sortAsc: true },
          { id: 9, name: "Exchange", sortAsc: true }
        ],
        data: [
          ["T1", 1, "", "B1", "INFY", "B", 20, 1, "C1", "NSE"],
          ["T1", 1, "", "B1", "INFY", "B", 30, 1.2, "C1", "NSE"]
        ]
      },
      PL: {
        columns: [
          { id: 0, name: "Account", sortAsc: true },
          { id: 1, name: "Symbol", sortAsc: true },
          { id: 2, name: "Netposition", sortAsc: true },
          { id: 3, name: "AvgPrice", sortAsc: true },
          { id: 4, name: "Ltp", sortAsc: true },
          { id: 5, name: "RealizedPnL", sortAsc: true },
          { id: 6, name: "UnRealizedPnL", sortAsc: true }
        ],
        data: [[1, "INFY", 130, 2.625, 2.625, 25.3, 25.3]]
      }
    }
  },
  action
) => {
  console.log("Reducer called");
  switch (action.type.comp) {
    case "LOGIN":
      return loginReducer(state, action);
    case "DIALOG":
      return dialogReducer(state, action);
    case "TABLE":
      return tableReducer(state, action);
    case "INITIAL":
      return initialReducer(state, action);
    default:
      return state;
  }
};
export default reducer;
