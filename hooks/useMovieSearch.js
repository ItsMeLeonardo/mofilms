import { useNetworkState } from "./useNetworkState";
import movieService from "../services/movies";

export const useMovieSearch = () => {
  const { data, meta, actions } = useNetworkState();
  const { isLoading, error } = meta;

  const search = async ({ keyword }) => {
    actions.startRequest();
    try {
      const { results } = await movieService.search(keyword);
      actions.setRequestData(results);
      actions.endRequest();
    } catch (error) {
      actions.setError(error);
      actions.endRequest();
    } finally {
      actions.endRequest();
    }
  };

  return { data, search, isLoading, error };
};
