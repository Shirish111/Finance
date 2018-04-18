import $ from "jquery";
import { setLoginAction } from "./../Actions/setLoginAction";

const initialReducer = (state, action) => {
  console.log("In InitialReducer");
  switch (action.type.type) {
    case "LOGGED_IN":
      //Perform an ajax query to see if the session is already set
      console.log("Case loggedIn");
      (function(dispatch1, setLoginAction) {
        $.ajax({
          method: "POST",
          url: "http://127.0.0.1:8000/isLoggedIn",
          dataType: "json",
          data: {},
          beforeSend: function(xhr) {
            xhr.withCredentials = true;
          },
          success: function(data) {
            console.log("Succesfully fetched");
            if (data.success) {
              dispatch1(setLoginAction("Shirish"));
            }
          }
        });
      })(action.payload, setLoginAction);
      //      $.post(
      //        "http://127.0.0.1:8000/isLoggedIn",
      //        {},
      //        (function(state) {
      //          return (data, status) => {
      //            var loggedIn = true
      //            console.log("After Returning");
      //            if (status === "success") {
      //              //console.log(status, data);
      //              if (data.success) {
      //                loggedIn = true
      //                console.log("Executed_______________________");
      //              } else {
      //
      //                console.log("Data.Success is not true");
      //              }
      //            }
      //          };
      //        })(state)
      //      );
      //      if(r.success === "true") {
      //        console.log("Success = True")
      //      } else {
      //        console.log("Success = False")
      //      }
      return {
        ...state,
        Initialized: true
      };
    //      return {
    //        ...state,
    //        User: {
    //          name: action.payload,
    //          login: true
    //        }
    //      };
    default:
      return state;
  }
};
export default initialReducer;
