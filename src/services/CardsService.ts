import CardResource from "../interfaces/resources/CardResource";
import CardResponse from "../interfaces/CardResponse";
import Endpoints from "../configs/Endpoints";
import RequestService from "./RequestService";

class CardService {
  static getCardsPaginated = async (page: number): Promise<CardResource[]> => {
    const response = await RequestService.get<CardResponse>(Endpoints.CARDS, {
      params: { page, orderBy: "name" },
    });
    return response.data?.data as CardResource[];
  };

  static getCardById = async (id: string): Promise<CardResource> => {
    const response = await RequestService.get<CardResponse>(
      `${Endpoints.CARDS}/${id}`
    );
    return response.data?.data as CardResource;
  };
}

export default CardService;
