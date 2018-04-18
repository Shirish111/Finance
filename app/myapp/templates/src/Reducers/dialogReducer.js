const dialogReducer = (state, action) => {
  var name1, height1, width1;
  switch (action.payload.name) {
    case "Buy Stock":
      name1 = "Buy";
      width1 = "500px";
      height1 = "545px";
      break;
    case "Sell Stock":
      name1 = "Sell";
      width1 = "500px";
      height1 = "545px";
      break;
    case "Modify":
      name1 = "Modify";
      width1 = "500px";
      height1 = "490px";
      break;
    case "Cancel":
      name1 = "Cancel";
      width1 = "500px";
      height1 = "220px";
      break;
    case "Notify":
      name1 = "Notify";
      width1 = "400px";
      height1 = "220px";
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
          height: height1,
          width:width1,
          msg:action.payload.status
        }
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        Dialog: {
          active: false,
          name: "",
          msg:""
        }
      };
    default:
      return state;
  }
};
export default dialogReducer;
