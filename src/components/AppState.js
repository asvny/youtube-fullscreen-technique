
import React, { useReducer, useMemo, useContext, createContext } from "react";

let AppState = createContext();

let SET_FULLSCREEN = "SET_FULLSCREEN";

function reducer(state, action) {
  switch (action.type) {
    case SET_FULLSCREEN: {
      return {
        ...state,
        isFullscreen: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export function AppProvider(props) {
  let [state, dispatch] = useReducer(reducer, {
    isFullscreen: false
  });

  let value = useMemo(() => [state, dispatch], [state]);

  return <AppState.Provider value={value}>{props.children}</AppState.Provider>;
}

export function useAppState() {
  let context = useContext(AppState);

  if (!context) {
    throw new Error(`AppProvider must declared before using this context`);
  }

  let [state, dispatch] = context;

  let setFullscreenMode = val =>
    dispatch({
      type: SET_FULLSCREEN,
      payload: val
    });

  return {
    state,
    setFullscreenMode
  };
}
