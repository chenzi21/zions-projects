import React, { useReducer, createContext } from "react";

const initialState = {
  trends: [],
  fetchedData: null,
  isFormOpen: false,
};

const state = createContext();
const { Provider } = state;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "openForm":
        newState.isFormOpen = !state.isFormOpen;
        return newState;
      default:
        console.log("fuck");
        break;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default StateProvider;
export { state };
