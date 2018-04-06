const loginReducer = (state, action) => {
  switch (action.type.type) {
    case "LOGIN":
      return {
        ...state,
        User: {
          login: true
        }
      };
    case "SET_LOGIN":
      return {
        ...state,
        User: {
          login: true
        }
      }
    default:
      return state;
  }
};
export default loginReducer;
