export const reSkils = (
  state = [
    { id: 1, name: "react js", grade: 60 },
    { id: 1, name: "html", grade: 80 },
    { id: 1, name: "java script", grade: 50 },
    { id: 1, name: "css", grade: 70 },
    { id: 1, name: "adobe photoshop", grade: 30 },
    { id: 1, name: "microsft exel", grade: 60 },
    { id: 1, name: "microsft word", grade: 70 },
  ],
  action
) => {
  switch (action.type) {
    case "SKILS":
      return action.paylod;
    default:
      return state;
  }
};

export const acSkils = (paylod) => {
  return {
    type: "SKILS",
    paylod,
  };
};
