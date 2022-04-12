import { CardState, CardAction } from "./Card.types";

const CardReducer = (state: CardState, action: CardAction): CardState => {
  switch (action.type) {
    case "addRecentCard": {
      const newState = { ...state };
      const { card } = action.data;
      const cardPosition = newState.recentlyViewedCards.findIndex(
        (c) => c.id === card.id
      );

      if (cardPosition !== -1) {
        newState.recentlyViewedCards.splice(cardPosition, 1);
      }

      newState.recentlyViewedCards.unshift(card);

      return newState;
    }

    default: {
      throw new Error("Unhandled action type for AuthDispatchContext");
    }
  }
};
export default CardReducer;
