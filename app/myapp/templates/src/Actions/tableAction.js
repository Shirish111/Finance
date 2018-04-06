export const tableAction = payload => {
  return {
    type: {
      comp: "TABLE",
      type: "SORT"
    },
    payload
  };
};
