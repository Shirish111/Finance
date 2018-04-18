const loginReducer = (state, action) => {
  switch (action.type.type) {
    case "LOGIN":
      return {
        ...state,
        User: {
          loggedIn: true, //false
          id: action.payload[0],
          username: action.payload[1]
        }
      };
    case "SET_LOGIN":
      return {
        ...state,
        User: {
          login: true
        }
      };
    default:
      return state;
  }
};
export default loginReducer;
