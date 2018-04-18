export const loggedInAction = payload => {
  return {
    type: {
      comp: "INITIAL",
      type: "LOGGED_IN"
    },
    payload
  };
};
