import CardResource from "./resources/CardResource";

interface CardResponse {
  data: CardResource | CardResource[];
  next: number | undefined;
}

export default CardResponse;
