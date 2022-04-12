import CardResource from "./resources/CardResource";

interface CardResponse {
  data: CardResource | CardResource[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export default CardResponse;
