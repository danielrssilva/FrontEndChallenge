import {
  useQuery,
  QueryObserverResult,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import CardResource from "../interfaces/resources/CardResource";
import CardService from "../services/CardsService";

function useCards(page: number): QueryObserverResult<CardResource[]> {
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

export function useInfiniteCards(
  page: number
): InfiniteQueryObserverResult<CardResource[]> {
  return useInfiniteQuery<CardResource[]>(
    ["cards", page],
    () => CardService.getCardsPaginated(page),
    {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      getNextPageParam: () => page + 1,
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
