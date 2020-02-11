import { createContext } from "react";

export const PatientDataContext = createContext();

export const PatientDataReducer = (state, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};
