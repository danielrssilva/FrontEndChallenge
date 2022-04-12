import React, { createContext, useReducer } from "react";
import { CardState, CardDispatch, CardProviderProps } from "./Card.types";
import CardReducer from "./CardReducer";

export const initialState: CardState = { recentlyViewedCards: [] };

export const CardContext = createContext<CardState>(initialState);
export const CardDispatchContext = createContext<CardDispatch | undefined>(
  undefined
);

function CardContextProvider({ children }: CardProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(CardReducer, initialState);
  return (
    <CardContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardContext.Provider>
  );
}

function useCardState(): CardState {
  const context = React.useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardState must be used within a CardContextProvider");
  }
  return context;
}
function useCardDispatch(): CardDispatch {
  const context = React.useContext(CardDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCardDispatch must be used within a CardContextProvider"
    );
  }
  return context;
}

export { CardContextProvider, useCardState, useCardDispatch };
