export const dialogOpenAction = payload => {
  return {
    type: {
      comp: "DIALOG",
      type: "DISPLAY_DIALOG"
    },
    payload
  };
};
export const dialogCloseAction = payload => {
  return {
    type: {
      comp: "DIALOG",
      type: "CLOSE_DIALOG"
    },
    payload
  };
};
