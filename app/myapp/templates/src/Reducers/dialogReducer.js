const dialogReducer = (state, action) => {
  var name1, height1;
  switch (action.payload) {
    case "Buy Stock":
      name1 = "Buy";
      height1 = "545px";
      break;
    case "Sell Stock":
      name1 = "Sell";
      height1 = "545px";
      break;
    case "Modify":
      name1 = "Modify";
      height1 = "490px";
      break;
    case "Cancel":
      name1 = "Cancel";
      break;
    default:
      break;
  }
  switch (action.type.type) {
    case "DISPLAY_DIALOG":
      return {
        ...state,
        Dialog: {
          active: true,
          name: name1,
          height: height1
        }
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        Dialog: {
          active: false,
          name: ""
        }
      };
    default:
      return state;
  }
};
export default dialogReducer;
