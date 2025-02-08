import React, { useContext } from "react";
import { createContext } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = (props) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const value = {
    toggleDrawer,
    state,
  };

  return (
    <UIContext.Provider value={value}>{props.children}</UIContext.Provider>
  );
};
