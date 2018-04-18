export const selectOrderAction = payload => {
  return {
    type: {
      comp: "TABLE",
      type: "SELECT_ORDER"
    },
    payload
  };
};
