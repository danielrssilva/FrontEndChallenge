import { useQuery, QueryObserverResult } from "react-query";
import CardResource from "../interfaces/resources/CardResource";
import CardService from "../services/CardsService";

function useCards(page: number = 1): QueryObserverResult<CardResource[]> {
  return useQuery<CardResource[]>(
    ["cards", page],
    () => CardService.getCardsPaginated(page),
    {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
}

export function useCardsByTerm(
  page: number = 1,
  term: string,
  enabled = true
): QueryObserverResult<CardResource[]> {
  return useQuery<CardResource[]>(
    ["cards", term],
    () => CardService.getCardsByTerm(page, term),
    {
      enabled,
      staleTime: 0,
      retry: 0,
      cacheTime: 0,
    }
  );
}

export function useCardById(id: string): QueryObserverResult<CardResource> {
  return useQuery<CardResource>(
    ["card", id],
    () => CardService.getCardById(id),
    {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    }
  );
}

export default useCards;
