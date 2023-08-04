export const reTheme = (state = JSON.parse(localStorage.getItem("theme"))||false, action) => {
    switch (action.type) {
      case "THEME":
        return action.paylod;
      default:
        return state;
    }
  };
  
  export const acTheme = (paylod) => {
    return {
      type: "THEME",
      paylod,
    };
  };
  