import React, { useReducer, useMemo, useContext, createContext } from "react";

interface State {
  isFullscreen: Boolean
}

type ActionTypes = "SET_FULLSCREEN";

interface Action {
  type: ActionTypes,
  payload: any
}

interface ProviderProps {
  children: React.ReactNode
}

type ContextValue = [State, React.Dispatch<Action>];

let AppState = createContext<ContextValue | null>(null);

let SET_FULLSCREEN: ActionTypes = "SET_FULLSCREEN";

function reducer(state: State, action: Action) {
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

export function AppProvider(props: ProviderProps) {
  let [state, dispatch] = useReducer(reducer, {
    isFullscreen: false
  });

  let value: ContextValue = useMemo(() => [state, dispatch], [state]);

  return <AppState.Provider value={value}>{props.children}</AppState.Provider>;
}

export function useAppState() {
  let context = useContext(AppState);

  if (!context) {
    throw new Error(`AppProvider must declared before using this context`);
  }

  let [state, dispatch] = context;

  let setFullscreenMode = (val: boolean) =>
    dispatch({
      type: "SET_FULLSCREEN",
      payload: val
    });

  return {
    state,
    setFullscreenMode
  };
}
