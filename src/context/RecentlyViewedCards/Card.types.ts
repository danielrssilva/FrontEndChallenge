import { ReactNode } from "react";
import CardResource from "../../interfaces/resources/CardResource";

export interface CardState {
  recentlyViewedCards: CardResource[];
}

export type CardAction = {
  type: "addRecentCard";
  data: {
    card: CardResource;
  };
};

export type CardDispatch = (action: CardAction) => void;

export type CardProviderProps = { children: ReactNode };
